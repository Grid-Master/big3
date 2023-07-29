import { FC, useState, useEffect } from 'react';
import styles from './Notification.module.css';

interface NotificationProps {
  message: string;
}

const Notification: FC<NotificationProps> = ({ message }) => {
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {show && (
        <div className={styles.notification}>
          <span>{message}</span>
        </div>
      )}
    </>
  );
};

export default Notification;
