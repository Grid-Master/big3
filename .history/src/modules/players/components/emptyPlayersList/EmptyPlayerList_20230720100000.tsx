import { FC } from 'react';

const EmptyPlayerList: FC = () => {
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

export default EmptyPlayerList;
