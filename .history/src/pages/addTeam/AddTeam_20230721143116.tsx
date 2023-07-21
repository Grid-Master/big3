import { FC, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
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
  image: any;
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
    register,
    formState: { errors },
  } = methods;
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isRequiredImage, setIsRequiredImage] = useState<boolean>(false);

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleAddPhoto = () => {
    if (imageAdder.current) {
      imageAdder.current.click();
    }
  };

  const handleRequiredImage = () => {
    if (!selectedImage && !imageUrl) {
      setIsRequiredImage(true);
    } else {
      setIsRequiredImage(false);
    }
  };

  const handleCancel = () => {
    if (id) {
      navigate(`/teams/${id}`);
    } else navigate('/teams');
  };

  const submitHandler: SubmitHandler<any> = async (data: Omit<IForm, 'imageUrl'>) => {
    let imagePath = null;
    console.log(data);

    // if (selectedImage) {
    //   // setIsRequiredImage(false);
    //   const imageResponse = await dispatch(addImage(selectedImage));
    //   imagePath = unwrapResult(imageResponse);
    // } else if (imageUrl) {
    //   // setIsRequiredImage(false);
    //   imagePath = imageUrl;
    // } else {
    //   // setIsRequiredImage(true);
    //   return;
    // }

    // if (imagePath && id) {
    //   await dispatch(updateTeam({ ...data, imageUrl: imagePath, id: +id }));
    //   alert('Team was updated');
    //   methods.reset();
    //   navigate(`/teams/${id}`);
    // } else if (imagePath) {
    //   const addTeamResponse = await dispatch(addTeam({ ...data, imageUrl: imagePath }));
    //   const { id } = unwrapResult(addTeamResponse);
    //   alert('Team was added');
    //   methods.reset();
    //   await dispatch(getTeam(id));
    //   navigate(`/teams/${id}`);
    // }
  };
  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(submitHandler)}>
        <p>
          <Breadcrumbs page="Teams" item={id ? 'Update team' : 'Add team'} />
        </p>
        <div className={styles.formContainer}>
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
            <input
              className={styles.hidden}
              {...register('image')}
              ref={imageAdder}
              type="file"
              accept=".png"
              onChange={handleImageChange}
            />
          </div>
          {isRequiredImage && <div className={styles.imageRequired}>Required</div>}
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
