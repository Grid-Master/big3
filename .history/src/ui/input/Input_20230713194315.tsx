import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { ISignIn } from '../../api/dto/IAuthorization';

interface IInput {
  value: string;
  label: string;
  type: string;
}

const Input: FC<IInput> = ({ value, label, type }) => {
  //   const { register } = useFormContext();
  return (
    <>
      <label>
        {label}
        <input type={type} />
      </label>
    </>
  );
};

export default Input;
