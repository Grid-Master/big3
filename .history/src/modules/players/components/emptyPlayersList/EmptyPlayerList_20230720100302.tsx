import { FC } from 'react';
import styles from './emptyPlayersList.module.sass';
import emptyPlayersImage from '../../../../assets/images/emptyPlayers.png';

const EmptyPlayerList: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={emptyPlayersImage} alt="empty" />
      </div>
      <h1>Empty here</h1>
      <p>Add new teams to continue</p>
    </div>
  );
};

export default EmptyPlayerList;
