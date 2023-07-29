import { FC, useEffect } from 'react';
import styles from './alert.module.sass';

interface IAlert {
  message: string;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Alert: FC<IAlert> = ({ message, setShow, show }) => {
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
