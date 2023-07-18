import { FC } from 'react';
import styles from './playerInRoster.module.sass';

import photo from '../../../../assets/images/rosterPlayer.png';

const PlayerInRoster: FC = () => {
  return (
    <li className={styles.container}>
      <div className={styles.player}>
        <p>-</p>
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
        <span className={styles.height}>218 cm</span>
        <span className={styles.weight}>100 kg</span>
        <span className={styles.age}>21</span>
      </div>
    </li>
  );
};

export default PlayerInRoster;
