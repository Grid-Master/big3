import { FC, useState, useEffect } from 'react';
import styles from './alert.module.sass';

interface IAlert {
  message: string;
}

const Alert: FC<IAlert> = ({ message }) => {
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {show && (
        <div className={styles.alert}>
          <span>{message}</span>
        </div>
      )}
    </>
  );
};

export default Alert;
