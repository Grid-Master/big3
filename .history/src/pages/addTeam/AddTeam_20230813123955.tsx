import { FC, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm, SubmitHandler, FormProvider, Controller } from 'react-hook-form';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import AddPhotoIcon from '../../assets/icons/AddPhotoIcon';
import Button from '../../common/components/button/Button';
import styles from './addTeam.module.sass';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { ITeam } from '../../api/dto/ITeams';
import { addTeam } from '../../modules/teams/teamsThunk';
import { addImage, getTeam, updateTeam } from '../../modules/teamInfo/teamInfoThunk';
import { selectTeamInfo } from '../../modules/teamInfo/teamInfoSelector';
import { unwrapResult } from '@reduxjs/toolkit';
import { setAlert } from '../../modules/alert/alertSlice';
import useImageUploader from '../../common/hooks/useImageUploader';
import Input from '../../common/components/input/Input';
import { clearTeamInfo } from '../../modules/teamInfo/teamInfoSlice';
import { selectTeams } from '../../modules/teams/teamsSelector';

interface IForm extends Omit<ITeam, 'id'> {
  image: string | null;
}

const AddTeam: FC = () => {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { selectedImage, handleImageChange } = useImageUploader();
  const {
    name,
    division,
    conference,
    foundationYear,
    imageUrl,
    error: errorTeamInfo,
    isLoading,
  } = useAppSelector(selectTeamInfo);
  const { error: errorTeams } = useAppSelector(selectTeams);
  const imageAdder = useRef<HTMLInputElement>(null);
  const methods = useForm<IForm>({ defaultValues: { name, division, conference, foundationYear } });
  const {
    control,
    formState: { errors },
  } = methods;

  const handleAddPhoto = () => {
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
      if (data.foundationYear > 2023) {
        methods.setError('foundationYear', {
          type: 'manual',
          message: `You can't set a year greater than the current year!`,
        });
        return;
      } else if (data.foundationYear?.toString().length !== 4) {
        methods.setError('foundationYear', {
          type: 'manual',
          message: `Wrong year!`,
        });
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
      const updateTeamResponse = await dispatch(
        updateTeam({ ...data, imageUrl: imagePath, id: +id }),
      );
      if (updateTeamResponse.payload && !('status' in updateTeamResponse.payload)) {
        dispatch(setAlert({ showed: true, message: 'Team successfully updated', type: 'success' }));
        methods.reset();
        navigate(`/teams/${id}`);
      }
    } else if (imagePath) {
      const addTeamResponse = await dispatch(addTeam({ ...data, imageUrl: imagePath }));
      if (addTeamResponse.payload && !('status' in addTeamResponse.payload)) {
        dispatch(setAlert({ showed: true, message: 'Team successfully added', type: 'success' }));
        methods.reset();
        const { id } = unwrapResult(addTeamResponse);
        await dispatch(getTeam(id));
        navigate(`/teams/${id}`);
      }
    }
  };

  useEffect(() => {
    if ((errorTeamInfo || errorTeams) === 409) {
      methods.setError('name', {
        type: 'manual',
        message: 'This name already exists!',
      });
    } else if (!isLoading) {
      methods.reset();
    }
  }, [errorTeamInfo, errorTeams]);
  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(submitHandler)}>
        <p>
          <Breadcrumbs page="Teams" item={'Add new team'} />
        </p>
        <div className={styles.formContainer}>
          <Controller
            name="image"
            control={control}
            defaultValue={imageUrl ? imageUrl : null}
            rules={{ required: ' ' }}
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
                  accept=".png,.jpeg,.jpg"
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
            <Input name="name" label="Name" type="text" />
            <Input name="division" label="Division" type="text" />
            <Input name="conference" label="Conference" type="text" />
            <Input name="foundationYear" label="Year of foundation" type="number" />
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
