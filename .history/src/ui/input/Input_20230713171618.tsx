import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { ISignIn } from '../../api/dto/IAuthorization';

interface IInput {
  label: string;
  type: string;
  placeholder: string;
}

const Input: FC<IInput> = ({ label, type, placeholder }) => {
  const {} = useForm<ISignIn>();
  return (
    <>
      <label>
        {label}
        <input type={type} placeholder={placeholder} />
      </label>
    </>
  );
};

export default Input;
