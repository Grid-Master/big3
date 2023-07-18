import { FC } from 'react';
import { useFormContext, UseFormRegister } from 'react-hook-form';
import { ISignIn } from '../../api/dto/IAuthorization';

interface IInput {
  register: any;
  label: string;
  type: string;
}

const Input: FC<IInput> = ({ register, label, type }) => {
  return (
    <>
      <label>
        {label}
        <input {...register(label)} type={type} />
      </label>
    </>
  );
};

export default Input;
