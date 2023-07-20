import { FC } from 'react';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import EditIcon from '../../assets/icons/EditIcon';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import styles from './playerInfo.module.sass';

const PlayerInfo: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <div className={styles.links}>
          <Breadcrumbs />
          <div>
            <EditIcon path="/updatePlayer" id={2} />
            <DeleteIcon id={2} />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PlayerInfo;
