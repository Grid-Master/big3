import { FC } from 'react';
import styles from './playerInRoster.module.sass';

const PlayerInRoster: FC = () => {
  return (
    <li className={styles.container}>
      <div>
        <p>10</p>
        <div>
          <img />
          <div>
            <h3>Bol Bol</h3>
            <p>Centerforward</p>
          </div>
        </div>
      </div>
      <div>
        <span>218 cm</span>
        <span>100 kg</span>
        <span>21</span>
      </div>
    </li>
  );
};

export default PlayerInRoster;
