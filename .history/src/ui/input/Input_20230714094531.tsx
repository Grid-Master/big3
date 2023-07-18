import { FC, useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './input.module.sass';
import ClosedEye from '../../assets/icons/ClosedEye';

interface IInput {
  name: string;
  type: string;
}

const Input: FC<IInput> = ({ name, type }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const { register } = useFormContext();

  useEffect(() => {
    if (type === 'password') {
      setIsVisible(false);
    }
  }, []);

  return (
    <>
      <label className={styles.container}>
        {name}
        <input
          className={styles.input}
          {...register(name, { required: true })}
          type={isVisible ? 'text' : 'password'}
        />
        {type === 'password' && <span onClick={() => setIsVisible(!isVisible)}><ClosedEye />></span>}
      </label>
    </>
  );
};

export default Input;
