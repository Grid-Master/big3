import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../common/hooks/reduxHooks';
import { selectTeamInfo } from '../../modules/teamInfo/teamInfoSelector';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import Roster from '../../modules/teams/components/roster/Roster';
import styles from './teamInfo.module.sass';
import EditIcon from '../../assets/icons/EditIcon';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import teamLogo from '../../assets/images/POR.png';

const TeamInfo: FC = () => {
  const location = useLocation();
  const { name, division, foundationYear, conference, imageUrl } = useAppSelector(selectTeamInfo);
  //@ts-ignore
  const id = parseInt(location.pathname.split('/').pop(), 10);
  console.log(process.env);

  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <div className={styles.links}>
          <Breadcrumbs />
          <div>
            <EditIcon />
            <DeleteIcon id={id} />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.containerImage}>
            <img src={`http://dev.trainee.dex-it.ru${imageUrl}`} alt="logo" />
          </div>
          <div>
            <h1 className={styles.name}>{name}</h1>
            <div className={styles.details}>
              <div>
                <h2>Year of foundation</h2>
                <p>{foundationYear}</p>
              </div>
              <div>
                <h2>Division</h2>
                <p>{division}</p>
              </div>
            </div>
            <div className={styles.conference}>
              <h2>Conference</h2>
              <p>{conference}</p>
            </div>
          </div>
        </div>
      </div>
      <Roster />
    </div>
  );
};

export default TeamInfo;
