import { FC } from 'react';

interface ICheckbox {
  label: string;
}

const Checkbox: FC<ICheckbox> = ({ label }) => {
  return (
    <label>
      <input type="checkbox" />
      {label}
    </label>
  );
};

export default Checkbox;
