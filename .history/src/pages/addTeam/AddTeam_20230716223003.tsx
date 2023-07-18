import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import AddPhotoIcon from '../../assets/icons/AddPhotoIcon';
import Input from '../../ui/input/Input';
import Button from '../../ui/button/Button';
import styles from './addTeam.module.sass';

const AddTeam: FC = () => {
  const methods = useForm<any>({});

  const submitHandler: SubmitHandler<any> = (data) => {};
  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(submitHandler)}>
        <p>
          <Breadcrumbs />
        </p>
        <div className={styles.formContainer}>
          <div className={styles.imageContainer}>
            <AddPhotoIcon />
          </div>
          <div className={styles.inputsContainer}>
            <Input name="name" label="Name" type="text" />
            <Input name="division" label="Division" type="text" />
            <Input name="conference" label="Conference" type="text" />
            <Input name="foundationYear" label="Year of foundation" type="number" />
            <div>
              <Button disable={false} onClick={() => {}}>
                Cancel
              </Button>
              <Button disable={false} onClick={() => {}}>
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
