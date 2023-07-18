import { FC } from 'react';

interface IInput {
  label: string;
  type: string;
  placeholder: string;
}

const Input: FC<IInput> = ({ label, type, placeholder }) => {
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
