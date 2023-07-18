import { FC, useRef, useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import AddPhotoIcon from '../../assets/icons/AddPhotoIcon';
import Input from '../../ui/input/Input';
import Button from '../../ui/button/Button';
import styles from './addTeam.module.sass';
import { useAppDispatch } from '../../common/hooks/reduxHooks';
import { addImage } from '../../modules/addTeam/addTeamThunk';

const AddTeam: FC = () => {
  const dispatch = useAppDispatch();
  const photoAdder = useRef<HTMLInputElement>(null);
  const methods = useForm<any>({});
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  console.log(!!selectedImage);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleAddPhoto = () => {
    if (photoAdder.current) {
      photoAdder.current.click();
    }
  };

  // const addImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // @ts-ignore
  //   const file = e.target.files[0];
  //   dispatch(addImage(file));
  // };

  const submitHandler: SubmitHandler<any> = async (data: { image: FileList }) => {
    // console.log(data.image);
    // if (data.image && data.image.length > 0) {
    //   const formData = new FormData();
    //   formData.append('image', data.image[0]);
    //   const res = await dispatch(addImage(formData));
    //   console.log(res);
    // }
    if (selectedImage) {
      const formData = new FormData();
      formData.append('photo', selectedImage);
      const res = await dispatch(addImage(formData));
      console.log(res);
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
            <AddPhotoIcon />
            <input
              {...methods.register('image')}
              className={styles.hidden}
              ref={photoAdder}
              type="file"
              accept=".png,.jpg"
              onChange={handleImageChange}
            />
          </div>
          <div className={styles.inputsContainer}>
            {/* <Input name="name" label="Name" type="text" />
            <Input name="division" label="Division" type="text" />
            <Input name="conference" label="Conference" type="text" />
            <Input name="foundationYear" label="Year of foundation" type="number" /> */}
            <div>
              <Button typeButton="cancel" disable={false} onClick={() => {}}>
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
