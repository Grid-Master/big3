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
import { addImage, updateTeam } from '../../modules/teamInfo/teamInfoThunk';
import { selectTeamInfo } from '../../modules/teamInfo/teamInfoSelector';
import { unwrapResult } from '@reduxjs/toolkit';

const AddTeam: FC = () => {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { name, division, conference, foundationYear, imageUrl } = useAppSelector(selectTeamInfo);
  const photoAdder = useRef<HTMLInputElement>(null);
  const methods = useForm<Omit<ITeam, 'id'>>({});
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleAddPhoto = () => {
    if (photoAdder.current) {
      photoAdder.current.click();
    }
  };

  const submitHandler: SubmitHandler<any> = async (data: Omit<Omit<ITeam, 'id'>, 'imageUrl'>) => {
    let imagePath = null;
    if (selectedImage) {
      const imageResponse = await dispatch(addImage(selectedImage));
      imagePath = unwrapResult(imageResponse);
    } else if (imageUrl) {
      imagePath = imageUrl;
    } else {
      alert('Choose an image');
    }

    if (imagePath && id) {
      await dispatch(updateTeam({ ...data, imageUrl: imagePath, id: +id }));
      alert('Team was updated');
    } else if (imagePath) {
      await dispatch(addTeam({ ...data, imageUrl: imagePath }));
      alert('Team was added');
    }
    methods.reset();
    navigate('/teams');
  };
  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(submitHandler)}>
        <p>
          <Breadcrumbs />
        </p>
        <div className={styles.formContainer}>
          <div onClick={handleAddPhoto} className={styles.imageContainer}>
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
              ref={photoAdder}
              type="file"
              accept=".png"
              onChange={handleImageChange}
            />
          </div>
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
              <Button
                typeButton="cancel"
                disable={false}
                onClick={() => {
                  navigate('/teams');
                }}>
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
