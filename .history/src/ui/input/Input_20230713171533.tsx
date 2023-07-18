import { FC } from 'react';
import { useForm } from 'react-hook-form';

interface IInput {
  label: string;
  type: string;
  placeholder: string;
}

const Input: FC<IInput> = ({ label, type, placeholder }) => {
  const {} = useForm();
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
