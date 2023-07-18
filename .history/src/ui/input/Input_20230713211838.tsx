import { FC, Ref } from 'react';
import { RegisterOptions, FieldValues, useFormContext } from 'react-hook-form';
import { ISignIn } from '../../api/dto/IAuthorization';

interface IInput {
  name: any;
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
