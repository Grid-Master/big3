import { FC, useEffect } from 'react';
import styles from './alert.module.sass';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { selectAlertIsShow, selectAlertMessage } from '../../../modules/alert/alertSelector';
import { setAlert } from '../../../modules/alert/alertSlice';

interface IAlert {
  isSuccess: boolean;
}

const Alert: FC<IAlert> = ({ isSuccess }) => {
  const show = useAppSelector(selectAlertIsShow);
  const message = useAppSelector(selectAlertMessage);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setAlert({ showed: false, message: '' }));
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
