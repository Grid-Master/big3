import { FC, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm, SubmitHandler, FormProvider, Controller } from 'react-hook-form';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import AddPhotoIcon from '../../assets/icons/AddPhotoIcon';
import Input from '../../ui/input/Input';
import Button from '../../ui/button/Button';
import styles from './addTeam.module.sass';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { ITeam } from '../../api/dto/ITeams';
import { addTeam } from '../../modules/teams/teamsThunk';
import { addImage, getTeam, updateTeam } from '../../modules/teamInfo/teamInfoThunk';
import { selectTeamInfo } from '../../modules/teamInfo/teamInfoSelector';
import { unwrapResult } from '@reduxjs/toolkit';

interface IForm extends Omit<ITeam, 'id'> {
  image: string | null;
}

const AddTeam: FC = () => {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { name, division, conference, foundationYear, imageUrl } = useAppSelector(selectTeamInfo);
  const imageAdder = useRef<HTMLInputElement>(null);
  const methods = useForm<IForm>({});
  const {
    control,
    formState: { errors },
  } = methods;
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleAddPhoto = () => {
    console.log('click');
    if (imageAdder.current) {
      imageAdder.current.click();
    }
  };

  const handleCancel = () => {
    if (id) {
      navigate(`/teams/${id}`);
    } else navigate('/teams');
  };

  const submitHandler: SubmitHandler<IForm> = async (data: Omit<IForm, 'imageUrl'>) => {
    let imagePath = null;

    if (data.foundationYear) {
      if (data.foundationYear?.toString().length !== 4 || data.foundationYear > 2023) {
        methods.setError('foundationYear', {
          type: 'manual',
          message: ``,
        });
        alert('Wrong year!');
        return;
      }
    }

    if (selectedImage) {
      const imageResponse = await dispatch(addImage(selectedImage));
      imagePath = unwrapResult(imageResponse);
    } else if (imageUrl) {
      imagePath = imageUrl;
    } else {
      return;
    }

    if (imagePath && id) {
      const response = await dispatch(updateTeam({ ...data, imageUrl: imagePath, id: +id }));
      //@ts-ignore
      if (response.payload.status === 409) {
        methods.setError('name', {
          type: 'manual',
          message: ``,
        });
        alert('This name already exists');
        return;
      }
      alert('Team was updated');
      methods.reset();
      navigate(`/teams/${id}`);
    } else if (imagePath) {
      const addTeamResponse = await dispatch(addTeam({ ...data, imageUrl: imagePath }));
      const { id } = unwrapResult(addTeamResponse);
      alert('Team was added');
      methods.reset();
      await dispatch(getTeam(id));
      navigate(`/teams/${id}`);
    }
  };
  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(submitHandler)}>
        <p>
          <Breadcrumbs page="Teams" item={id ? 'Update team' : 'Add team'} />
        </p>
        <div className={styles.formContainer}>
          <Controller
            name="image"
            control={control}
            defaultValue={imageUrl ? imageUrl : null}
            rules={{ required: '' }}
            render={({ field }) => (
              <>
                <input
                  className={styles.hidden}
                  onChange={(e) => {
                    field.onChange(e);
                    handleImageChange(e);
                  }}
                  ref={imageAdder}
                  type="file"
                  accept=".png"
                />
                <div
                  onClick={handleAddPhoto}
                  className={
                    errors.image?.type === 'required'
                      ? `${styles.imageContainer} ${styles.required}`
                      : styles.imageContainer
                  }>
                  {(selectedImage || imageUrl) && (
                    <img
                      className={styles.prevImage}
                      src={
                        selectedImage
                          ? URL.createObjectURL(selectedImage)
                          : imageUrl
                          ? `http://dev.trainee.dex-it.ru${imageUrl}`
                          : ''
                      }
                    />
                  )}
                  <AddPhotoIcon />
                </div>
              </>
            )}
          />
          {errors.image?.type === 'required' && (
            <div className={styles.imageRequired}>Required</div>
          )}
          <div className={styles.inputsContainer}>
            <Input name="name" label="Name" type="text" value={name ? name : ''} />
            <Input name="division" label="Division" type="text" value={division ? division : ''} />
            <Input
              name="conference"
              label="Conference"
              type="text"
              value={conference ? conference : ''}
            />
            <Input
              name="foundationYear"
              label="Year of foundation"
              type="number"
              value={foundationYear ? foundationYear.toString() : ''}
            />
            <div>
              <Button typeButton="cancel" disable={false} onClick={handleCancel}>
                Cancel
              </Button>
              <Button disable={false} onClick={methods.handleSubmit(submitHandler)}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddTeam;
