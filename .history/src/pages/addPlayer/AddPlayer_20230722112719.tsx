import { FC } from 'react';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import Input from '../../ui/input/Input';

const AddPlayer: FC = () => {
  return (
    <form>
      <Breadcrumbs page="Players" item={'ы'} />
      <div>
        <img />
        <div>
          <Input name="name" type="text" label="Name" />
        </div>
      </div>
    </form>
  );
};

export default AddPlayer;
