import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import Input from '../../ui/input/Input';

const AddPlayer: FC = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form>
        <Breadcrumbs page="Players" item={'ы'} />
        <div>
          <img />
          <div>
            <Input name="name" type="text" label="Name" />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddPlayer;
