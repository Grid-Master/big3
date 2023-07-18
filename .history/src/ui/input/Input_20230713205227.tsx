import { FC } from 'react';
import { useFormContext, UseFormRegister, FieldErrors } from 'react-hook-form';
import { ISignIn } from '../../api/dto/IAuthorization';

interface IInput {
  register: UseFormRegister<ISignIn>;
  errors: any;
  label: any;
  type: string;
}

const Input: FC<IInput> = ({ register, errors, label, type }) => {
  console.log(errors);
  return (
    <>
      <label>
        {label}
        <input {...register(label, { required: true })} type={type} />
        {errors[label] ? <h1>error</h1> : <h1>?</h1>}
      </label>
    </>
  );
};

export default Input;
