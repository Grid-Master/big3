import { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';

interface IInput {
  name: string;
  type: string;
  hide: boolean;
}

const Input: FC<IInput> = ({ name, type, hide }) => {
  const [isVisible, setIsVisible] = useState<boolean>(hide);
  const { register } = useFormContext();

  return (
    <>
      <label>
        {name}
        <input {...register(name, { required: true })} type={isVisible ? 'text' : 'password'} />
        {hide && <h1 onClick={() => setIsVisible(!isVisible)}>$</h1>}
      </label>
    </>
  );
};

export default Input;
