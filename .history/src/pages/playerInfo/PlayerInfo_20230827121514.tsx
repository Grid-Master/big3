import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import EditIcon from '../../assets/icons/EditIcon';
import styles from './playerInfo.module.sass';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { selectPlayerInfo } from '../../modules/playerInfo/playerInfoSelector';
import RemoveButton from '../../common/components/removeButton/RemoveButton';
import { calculateAge } from '../../common/helpers/helpers';
import NotFound from '../notFound/NotFound';
import { setAlert } from '../../modules/alert/alertSlice';

const PlayerInfo: FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { id } = params;
  const { name, number, position, height, weight, birthday, avatarUrl, teamName, error } =
    useAppSelector(selectPlayerInfo);

  useEffect(() => {
    if (error === 404) {
      dispatch(setAlert({ showed: true, message: 'Not found!', type: 'failure' }));
    } else if (error === 500) {
      dispatch(setAlert({ showed: true, message: 'Server error!', type: 'failure' }));
    }
  }, [error]);

  if (!id) return <div>Error</div>;

  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <div className={styles.links}>
          <Breadcrumbs page="Players" item={name} />
          <div>
            <EditIcon path="/updatePlayer" id={+id} />
            <RemoveButton id={+id} />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.containerImage}>
            <img src={`http://dev.trainee.dex-it.ru${avatarUrl}`} alt="player" />
          </div>
          <div>
            <h1 className={styles.name}>
              {name} <span>#{number}</span>
            </h1>
            <ul className={styles.details}>
              <li>
                <h2>Position</h2>
                <p>{position}</p>
              </li>
              <li>
                <h2>Team</h2>
                <p>{teamName}</p>
              </li>
            </ul>
            <ul className={styles.details}>
              <li>
                <h2>Height</h2>
                <p>{height} cm</p>
              </li>
              <li>
                <h2>Weight</h2>
                <p>{weight} cm</p>
              </li>
            </ul>
            <div className={styles.age}>
              <h2>Age</h2>
              <p>{calculateAge(birthday)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
