import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import Input from '../../ui/input/Input';
import styles from './addPlayer.module.sass';
import Select from '../../ui/select/Select';
import AddPhotoIcon from '../../assets/icons/AddPhotoIcon';

const AddPlayer: FC = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form className={styles.form}>
        <p>
          <Breadcrumbs page="Players" item={'ы'} />
        </p>
        <div className={styles.container}>
          <div>
            <AddPhotoIcon />
          </div>
          <div>
            <div>
              <img />
            </div>
            <div>
              <Input name="name" type="text" label="Name" />
              <Select />
              <div>
                <Input name="height" type="number" label="Height (cm)" />
                <Input name="weight" type="number" label="Weight (kg)" />
              </div>
              <div>
                <Input name="birthday" type="date" label="Birthday" />
                <Input name="number" type="number" label="Number" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddPlayer;
