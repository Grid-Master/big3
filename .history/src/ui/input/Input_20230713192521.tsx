import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { ISignIn } from '../../api/dto/IAuthorization';

interface IInput {
  label: string;
  type: string;
}

const Input: FC<IInput> = ({ label, type }) => {
  const { register } = useFormContext<ISignIn>();
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
