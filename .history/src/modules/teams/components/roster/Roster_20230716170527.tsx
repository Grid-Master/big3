import { FC } from 'react';
import styles from './roster.module.sass';

const Roster: FC = () => {
  return (
    <ul>
      <li className={styles.title}>Roster</li>
      <li className={styles.characteristic}>
        <div>
          #<span className={styles.player}>Player</span>
        </div>
        <div className={styles.details}>
          <span>Height</span>
          <span>Weight</span>
          <span>Age</span>
        </div>
      </li>
    </ul>
  );
};

export default Roster;
