import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { selectTeamInfo } from '../../modules/teamInfo/teamInfoSelector';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import Roster from '../../modules/teamInfo/components/roster/Roster';
import styles from './teamInfo.module.sass';
import EditIcon from '../../assets/icons/EditIcon';
import RemoveButton from '../../common/components/removeButton/RemoveButton';
import { setAlert } from '../../modules/alert/alertSlice';

const TeamInfo: FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { id } = params;
  const { name, division, foundationYear, conference, imageUrl, error } =
    useAppSelector(selectTeamInfo);

  useEffect(() => {
    if (error === 404) {
      dispatch(setAlert({ showed: true, message: 'Not found!', type: 'failure' }));
    } else if (error === 500) {
      dispatch(setAlert({ showed: true, message: 'Server error!', type: 'failure' }));
    }
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <div className={styles.links}>
          <Breadcrumbs page="Teams" item={name} />
          <div>
            <EditIcon path="/updateTeam" id={id} />
            <RemoveButton isError={!!error} id={id} />
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
      <Roster teamId={id} />
    </div>
  );
};

export default TeamInfo;
