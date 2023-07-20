import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import EditIcon from '../../assets/icons/EditIcon';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import styles from './playerInfo.module.sass';
import { useAppSelector } from '../../common/hooks/reduxHooks';
import { selectPlayerInfo } from '../../modules/playerInfo/playerInfoSelector';

const PlayerInfo: FC = () => {
  const location = useLocation();
  //@ts-ignore
  const id = parseInt(location.pathname.split('/').pop(), 10);
  const { name, number, position, team, height, weight } = useAppSelector(selectPlayerInfo);

  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <div className={styles.links}>
          <Breadcrumbs />
          <div>
            <EditIcon path="/updatePlayer" id={id} />
            <DeleteIcon id={id} />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.containerImage}>
            <img src={`http://dev.trainee.dex-it.ru/images/a0ofoyso.png`} alt="player" />
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
    </div>
  );
};

export default PlayerInfo;
