import { FC } from 'react';
import styles from './notFound.module.sass';
import NotFoundImage from '../../assets/images/404.png';

const NotFound: FC = () => {
  return (
    <div className={styles.container}>
      <img src={NotFoundImage} alt="404" />
    </div>
  );
};

export default NotFound;
