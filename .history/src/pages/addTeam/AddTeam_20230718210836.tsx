import { FC, useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import AddPhotoIcon from '../../assets/icons/AddPhotoIcon';
import Input from '../../ui/input/Input';
import Button from '../../ui/button/Button';
import styles from './addTeam.module.sass';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { addImage } from '../../modules/addTeam/addTeamThunk';
import { ITeam } from '../../api/dto/ITeams';
import { addTeam } from '../../modules/teams/teamsThunk';

const AddTeam: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const imageUrl = useAppSelector((state) => state.AddTeamReducer.imageUrl);
  const photoAdder = useRef<HTMLInputElement>(null);
  const methods = useForm<Omit<ITeam, 'id'>>({});
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  useEffect(() => {
    if (imageUrl) {
      // Используйте imageUrl здесь
      console.log('useeffect', imageUrl);
    }
  }, [imageUrl]);

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
    if (selectedImage) {
      await dispatch(addImage(selectedImage));
      await dispatch(addTeam({ ...data, imageUrl }));
      alert('Team was added');
      methods.reset();
      navigate('/teams');
    } else {
      alert('Choose an image');
    }
  };
  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(submitHandler)}>
        <p>
          <Breadcrumbs />
        </p>
        <div className={styles.formContainer}>
          <div onClick={handleAddPhoto} className={styles.imageContainer}>
            <img
              className={styles.prevImage}
              src={selectedImage ? URL.createObjectURL(selectedImage) : ''}
            />
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
            <Input name="name" label="Name" type="text" />
            <Input name="division" label="Division" type="text" />
            <Input name="conference" label="Conference" type="text" />
            <Input name="foundationYear" label="Year of foundation" type="number" />
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
