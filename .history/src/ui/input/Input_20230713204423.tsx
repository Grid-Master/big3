import { FC } from 'react';
import { useFormContext, UseFormRegister } from 'react-hook-form';
import { ISignIn } from '../../api/dto/IAuthorization';

interface IInput {
  register: any;
  errors: any;
  label: string;
  type: string;
}

const Input: FC<IInput> = ({ register, label, type }) => {
  return (
    <>
      <label>
        {label}
        <input {...register(label, { required: true })} type={type} />
      </label>
    </>
  );
};

export default Input;
