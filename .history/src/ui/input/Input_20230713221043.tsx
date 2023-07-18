import { FC, useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

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
      <label>
        {name}
        <input {...register(name, { required: true })} type={isVisible ? 'text' : 'password'} />
        {type === 'password' && <h1 onClick={() => setIsVisible(!isVisible)}>$</h1>}
      </label>
    </>
  );
};

export default Input;
