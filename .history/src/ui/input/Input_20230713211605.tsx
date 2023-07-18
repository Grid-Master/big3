import { FC, Ref } from 'react';
import { RegisterOptions, FieldValues } from 'react-hook-form';
import { ISignIn } from '../../api/dto/IAuthorization';

interface IInput {
  register: Ref<HTMLInputElement> | RegisterOptions<FieldValues>;
  errors: any;
  label: any;
  type: string;
}

const Input: FC<IInput> = ({ register, errors, label, type }) => {
  return (
    <>
      <label>
        {label}
        <input {...register(label, { required: true })} type={type} />
        {errors[label] ? <h1></h1> : <h1></h1>}
      </label>
    </>
  );
};

export default Input;
