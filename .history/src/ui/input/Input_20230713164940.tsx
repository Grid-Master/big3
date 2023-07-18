import { FC } from 'react';

interface IInput {
  label: string;
  type: string;
}

const Input: FC<IInput> = ({ label, type }) => {
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
