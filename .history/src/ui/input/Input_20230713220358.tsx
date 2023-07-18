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
        <input {...register(name, { required: true })} type={type} />
      </label>
    </>
  );
};

export default Input;
