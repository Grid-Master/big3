import { FC } from 'react';
import styles from './playerInRoster.module.sass';

import photo from '../../../../assets/images/rosterPlayer.png';

const PlayerInRoster: FC = () => {
  return (
    <li className={styles.container}>
      <div className={styles.player}>
        <p>10</p>
        <div>
          <div className={styles.imageContainer}>
            <img src={photo} alt="player" />
          </div>
          <div>
            <h3>Bol Bol</h3>
            <p>Centerforward</p>
          </div>
        </div>
      </div>
      <div className={styles.characteristic}>
        <span>218 cm</span>
        <span>100 kg</span>
        <span>21</span>
      </div>
    </li>
  );
};

export default PlayerInRoster;
