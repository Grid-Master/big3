import { FC } from 'react';
import styles from './roster.module.sass';

const Roster: FC = () => {
  return (
    <ul>
      <li className={styles.title}>Roster</li>
      <li>
        <div>
          #<span>Player</span>
        </div>
        <div>
          <span>Height</span>
          <span>Weight</span>
          <span>Age</span>
        </div>
      </li>
    </ul>
  );
};

export default Roster;
