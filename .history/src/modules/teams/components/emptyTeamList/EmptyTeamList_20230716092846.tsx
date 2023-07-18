import { FC } from 'react';
import styles from './emptyTeamList.module.sass';
import emptyTeamsImage from '../../../../assets/images/emptyTeams.png';

const EmptyTeamList: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={emptyTeamsImage} alt="empty" />
      </div>
      <h1>Empty here</h1>
      <p>Add new teams to continue</p>
    </div>
  );
};

export default EmptyTeamList;
