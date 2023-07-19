import { FC } from 'react';
import styles from './notFound.module.sass';
import NotFoundImage from '../../assets/images/404.png';

const NotFound: FC = () => {
  return (
    <div className={styles.container}>
      <>
        <img src={NotFoundImage} alt="404" />
        <h1>Page not found</h1>
        <p>Sorry, we can’t find what you’re looking for</p>
      </>
    </div>
  );
};

export default NotFound;
