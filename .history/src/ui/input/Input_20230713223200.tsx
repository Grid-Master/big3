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
        {name.charAt(0).toUpperCase() + name.slice(1)}
        <input {...register(name, { required: true })} type={isVisible ? 'text' : 'password'} />
        {type === 'password' && <span onClick={() => setIsVisible(!isVisible)}>%</span>}
      </label>
    </>
  );
};

export default Input;
