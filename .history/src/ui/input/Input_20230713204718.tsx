import { FC } from 'react';
import { useFormContext, UseFormRegister, FieldErrors } from 'react-hook-form';
import { ISignIn } from '../../api/dto/IAuthorization';

interface IInput {
  register: UseFormRegister<ISignIn>;
  errors: FieldErrors<ISignIn>;
  label: any;
  type: string;
}

const Input: FC<IInput> = ({ register, errors, label, type }) => {
  return (
    <>
      <label>
        {label}
        <input {...register(label, { required: true })} type={type} />
        {errors.login ? <h1>error</h1> : null}
      </label>
    </>
  );
};

export default Input;
