import { FC } from 'react';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import EditIcon from '../../assets/icons/EditIcon';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import styles from './playerInfo.module.sass';

const PlayerInfo: FC = () => {
  return (
    <div>
      <div className={styles.links}>
        <Breadcrumbs />
        <div>
          <EditIcon path="/updatePlayer" id={2} />
          <DeleteIcon id={2} />
        </div>
      </div>
      player info1
    </div>
  );
};

export default PlayerInfo;
