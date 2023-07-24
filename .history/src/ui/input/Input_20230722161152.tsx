import { FC, useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './input.module.sass';
import ClosedEye from '../../assets/icons/ClosedEye';
import Eye from '../../assets/icons/Eye';
import Calendar from '../../assets/icons/Calendar';

interface IInput {
  name: string;
  type: string;
  label: string;
  value?: string;
}

const Input: FC<IInput> = ({ name, type, label, value }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    setValue(name, value);
  }, [setValue, name]);

  useEffect(() => {
    if (type === 'password') {
      setIsVisible(false);
    }
  }, []);

  const visibileHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <label className={styles.container}>
        {label}
        <input
          className={
            errors[name]?.type === 'required' || errors[name]?.type === 'manual'
              ? `${styles.requiredInput} ${styles.input}`
              : styles.input
          }
          {...register(name, { required: true })}
          type={isVisible ? type : 'password'}
          placeholder=" "
        />
        {type === 'password' && (
          <span className={styles.icon} onClick={visibileHandler}>
            {!isVisible ? <ClosedEye /> : <Eye />}
          </span>
        )}
        {type === 'date' && (
          <div className={styles.icon}>
            <Calendar />
          </div>
        )}
        {errors[name]?.type === 'required' && <p className={styles.required}>Required</p>}

        {errors[name]?.type === 'manual' && (
          //@ts-ignore
          <p className={styles.required}>{errors[name]?.message}</p>
        )}
      </label>
    </>
  );
};

export default Input;
