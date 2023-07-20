import { FC, useState } from 'react';
import { useController } from 'react-hook-form';

interface ICheckbox {
  name: string;
  label: string;
  control: any;
}

const Checkbox: FC<ICheckbox> = ({ name, label, control }) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: 'You must be accept the agreement.   ' },
    defaultValue: false,
  });

  const handleCheck = () => {};
  return (
    <label>
      <div>
        <img />
      </div>
      <input {...inputProps} ref={ref} type="checkbox" />
      {label}

      {error && <span>{error.message}</span>}
    </label>
  );
};

export default Checkbox;
