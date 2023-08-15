import { FC, useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './input.module.sass';
import ClosedEye from '../../../assets/icons/ClosedEye';
import Eye from '../../../assets/icons/Eye';
import Calendar from '../../../assets/icons/Calendar';

interface IInput {
  name: string;
  type: string;
  label: string;
  value?: string | (() => string);
}

const Input: FC<IInput> = ({ name, type, label, value }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [dateValue, setDateValue] = useState<string>('');

  const dateValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateValue(e.target.value);
  };

  const {
    register,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    if (type === 'password') {
      setIsVisible(false);
    }
    if (value && type === 'date') {
      setDateValue(value);
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
          {...register(name, { required: true })}
          className={
            errors[name]?.type === 'required' || errors[name]?.type === 'manual'
              ? `${styles.requiredInput} ${styles.input}`
              : styles.input
          }
          defaultValue={type === 'date' ? dateValue : undefined}
          onChange={type === 'date' ? dateValueHandler : undefined}
          type={!isVisible ? type : type === 'number' ? type : type === 'date' ? type : 'text'}
          autoComplete={'off'}
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
          <p className={styles.required}>{`${errors[name]?.message}`}</p>
        )}
      </label>
    </>
  );
};

export default Input;
