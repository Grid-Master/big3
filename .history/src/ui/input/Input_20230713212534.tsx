import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface IInput {
  name: string;
  type: string;
}

const Input: FC<IInput> = ({ name, type }) => {
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
