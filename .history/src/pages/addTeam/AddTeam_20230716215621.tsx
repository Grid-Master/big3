import { FC } from 'react';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import AddPhotoIcon from '../../assets/icons/AddPhotoIcon';

const AddTeam: FC = () => {
  return (
    <form>
      <Breadcrumbs />
      <div>
        <div>
          <AddPhotoIcon />
        </div>
      </div>
    </form>
  );
};

export default AddTeam;
