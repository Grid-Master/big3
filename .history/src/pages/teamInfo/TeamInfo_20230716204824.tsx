import { FC, useEffect } from 'react';
import styles from './teamInfo.module.sass';
import EditIcon from '../../assets/icons/EditIcon';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import teamLogo from '../../assets/images/POR.png';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import Roster from '../../modules/teams/components/roster/Roster';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { getTeam } from '../../modules/teamInfo/teamInfoThunk';
import { useLocation } from 'react-router-dom';

const TeamInfo: FC = () => {
  const location = useLocation();
  console.log(Number(location.pathname.match(/\d+/)[0]));
  const dispatch = useAppDispatch();
  const { name, division, foundationYear, conference, imageUrl } = useAppSelector(
    (state) => state.TeamInfoReducer,
  );

  const fetchTeams = async (id: number) => {
    await dispatch(getTeam(id));
  };

  useEffect(() => {
    fetchTeams(32);
  }, []);

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
