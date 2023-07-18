import { FC, useRef } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import AddPhotoIcon from '../../assets/icons/AddPhotoIcon';
import Input from '../../ui/input/Input';
import Button from '../../ui/button/Button';
import styles from './addTeam.module.sass';

const AddTeam: FC = () => {
  const photoAdder = useRef<HTMLInputElement>(null);
  const methods = useForm<any>({});

  const handleAddPhoto = () => {
    if (photoAdder.current) {
      photoAdder.current.click();
    }
  };

  // const addPhotoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   //@ts-ignore
  //   const file = e.target.files[0];

  //   if (file) {
  //     const addingPhoto = {
  //       id: new Date().getTime(),
  //       isSelected: false,
  //       file,
  //     };
  //     dispatch(addPhoto(addingPhoto));
  //   }
  // };

  const submitHandler: SubmitHandler<any> = (data) => {
    console.log(data);
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
            <input className={styles.hidden} ref={photoAdder} type="file" accept=".png,.jpg" />
          </div>
          <div className={styles.inputsContainer}>
            <Input name="name" label="Name" type="text" />
            <Input name="division" label="Division" type="text" />
            <Input name="conference" label="Conference" type="text" />
            <Input name="foundationYear" label="Year of foundation" type="number" />
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
