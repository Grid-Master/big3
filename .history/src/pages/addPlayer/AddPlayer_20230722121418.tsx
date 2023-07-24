import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import Input from '../../ui/input/Input';
import styles from './addPlayer.module.sass';
import Select from '../../ui/select/Select';

const AddPlayer: FC = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form className={styles.form}>
        <Breadcrumbs page="Players" item={'ы'} />
        <div>
          <div>
            <img />
          </div>
          <div>
            <Input name="name" type="text" label="Name" />
            <Select />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddPlayer;
