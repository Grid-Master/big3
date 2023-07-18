import { FC } from 'react';
import styles from './emptyTeamList.module.sass';

const EmptyTeamList: FC = () => {
  return (
    <div className={styles.container}>
      <img alt="empty" />
      <h1>Empty here</h1>
      <p>Add new teams to continue</p>
    </div>
  );
};

export default EmptyTeamList;
