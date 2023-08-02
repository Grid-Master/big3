import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import EditIcon from '../../assets/icons/EditIcon';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import styles from './playerInfo.module.sass';
import { useAppSelector } from '../../common/hooks/reduxHooks';
import { selectPlayerInfo } from '../../modules/playerInfo/playerInfoSelector';
import { calculateAge } from '../../common/utils/utils';

const PlayerInfo: FC = () => {
  const params = useParams();
  const { id } = params;
  const { name, number, position, height, weight, birthday, avatarUrl, teamName } =
    useAppSelector(selectPlayerInfo);

  if (!id) return <div>Error</div>;

  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <div className={styles.links}>
          <Breadcrumbs page="Players" item={name} />
          <div>
            <EditIcon path="/updatePlayer" id={+id} />
            <DeleteIcon id={+id} />
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
