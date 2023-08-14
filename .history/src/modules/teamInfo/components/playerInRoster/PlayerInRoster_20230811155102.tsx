import { FC } from 'react';
import styles from './playerInRoster.module.sass';
import { IPlayer } from '../../../../api/dto/IPlayers';
import { calculateAge } from '../../../../common/helpers/helpers';

const PlayerInRoster: FC<IPlayer> = ({
  height,
  weight,
  name,
  number,
  position,
  avatarUrl,
  birthday,
}) => {
  return (
    <li className={styles.container}>
      <div className={styles.player}>
        <p>{number}</p>
        <div>
          <div className={styles.imageContainer}>
            <img src={`http://dev.trainee.dex-it.ru${avatarUrl}`} alt="player" />
          </div>
          <div>
            <h3>{name}</h3>
            <p>{position}</p>
          </div>
        </div>
      </div>
      <div className={styles.characteristic}>
        <span className={styles.height}>{height} cm</span>
        <span className={styles.weight}>{weight} kg</span>
        <span className={styles.age}>{calculateAge(birthday)}</span>
      </div>
    </li>
  );
};

export default PlayerInRoster;
