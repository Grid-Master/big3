import { FC } from 'react';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import AddPhotoIcon from '../../assets/icons/AddPhotoIcon';
import Input from '../../ui/input/Input';

const AddTeam: FC = () => {
  return (
    <form>
      <Breadcrumbs />
      <div>
        <div>
          <AddPhotoIcon />
        </div>
        <div>
          <Input name="name" label="Name" type="text" />
          <Input name="division" label="Division" type="text" />
          <Input name="conference" label="Conference" type="text" />
          <Input name="foundationYear" label="Year of foundation" type="number" />
        </div>
      </div>
    </form>
  );
};

export default AddTeam;
