import { FC, useEffect } from 'react';
import styles from './alert.module.sass';

interface IAlert {
  message: string;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccess: boolean;
}

const Alert: FC<IAlert> = ({ message, setShow, show, isSuccess }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {show && (
        <div className={isSuccess ? `${styles.alert} ${styles.success}` : styles.alert}>
          <span>{message}</span>
        </div>
      )}
    </>
  );
};

export default Alert;
