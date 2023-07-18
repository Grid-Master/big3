import { FC } from 'react';
import styles from './teamInfo.module.sass';
import EditIcon from '../../assets/icons/EditIcon';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import teamLogo from '../../assets/images/POR.png';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import Roster from '../../modules/teams/components/roster/Roster';
import { useAppDispatch } from '../../common/hooks/reduxHooks';

const TeamInfo: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <div className={styles.links}>
          <Breadcrumbs />
          <div>
            <EditIcon />
            <DeleteIcon />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.containerImage}>
            <img src={teamLogo} alt="logo" />
          </div>
          <div>
            <h1 className={styles.name}>Denver Nuggets</h1>
            <div className={styles.details}>
              <div>
                <h2>Year of foundation</h2>
                <p>1976</p>
              </div>
              <div>
                <h2>Division</h2>
                <p>Northwestern</p>
              </div>
            </div>
            <div className={styles.conference}>
              <h2>Conference</h2>
              <p>Western</p>
            </div>
          </div>
        </div>
      </div>
      <Roster />
    </div>
  );
};

export default TeamInfo;
