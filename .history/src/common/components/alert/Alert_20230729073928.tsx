import { FC, useEffect } from 'react';
import styles from './alert.module.sass';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { selectAlertOptions } from '../../../modules/alert/alertSelector';
import { setAlert } from '../../../modules/alert/alertSlice';

interface IAlert {
  isSuccess: boolean;
}

const Alert: FC<IAlert> = ({ isSuccess }) => {
  const { showed, message, type } = useAppSelector(selectAlertOptions);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setAlert({ showed: false, message: '', type: null }));
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showed && (
        <div className={type === 'success' ? `${styles.alert} ${styles.success}` : styles.alert}>
          <span>{message}</span>
        </div>
      )}
    </>
  );
};

export default Alert;
