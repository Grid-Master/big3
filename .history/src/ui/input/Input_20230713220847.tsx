import { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';

interface IInput {
  name: string;
  type: string;
}

const Input: FC<IInput> = ({ name, type }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { register } = useFormContext();

  return (
    <>
      <label>
        {name}
        <input {...register(name, { required: true })} type={!isVisible ? 'text' : 'password'} />
        {type === 'password' && <h1 onClick={() => setIsVisible(!isVisible)}>$</h1>}
      </label>
    </>
  );
};

export default Input;
