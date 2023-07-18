import { FC, useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './input.module.sass';
import ClosedEye from '../../assets/icons/ClosedEye';

interface IInput {
  name: string;
  type: string;
  label: string;
}

const Input: FC<IInput> = ({ name, type, label }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const {
    register,
    formState: { errors },
  } = useFormContext();
  // console.log(errors);

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
          className={styles.input}
          {...register(name, { required: true })}
          type={isVisible ? 'text' : 'password'}
        />
        {type === 'password' && (
          <span className={styles.icon} onClick={visibileHandler}>
            <ClosedEye />
          </span>
        )}
        {errors[name]?.type === 'required' && <p className={styles.required}>Required</p>}
      </label>
    </>
  );
};

export default Input;
