import { FC, useState, useEffect } from 'react';
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
      <div className={show ? `${styles.showed} ${styles.alert}` : styles.alert}>
        <span>{message}</span>
      </div>
    </>
  );
};

export default Alert;
