import { FC } from 'react';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';

const AddPlayer: FC = () => {
  return (
    <form>
      <Breadcrumbs page="Players" item={''} />
    </form>
  );
};

export default AddPlayer;
