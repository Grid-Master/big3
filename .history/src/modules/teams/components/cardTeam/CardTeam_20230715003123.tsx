import { FC } from 'react';
import styles from './cardTeam.module.sass';
import teamLogo from '../../../../assets/images/POR.png';

const CardTeam: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerLogo}>
        <img src={teamLogo} alt="logo" />
      </div>
      <div className={styles.containerInfo}>
        <h2>Portland trail blazers</h2>
        <p>Year of foundation: 1970</p>
      </div>
    </div>
  );
};

export default CardTeam;
