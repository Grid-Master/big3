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
    fieldState: { invalid, isTouched, isDirty },
  } = useController({
    name,
    control,
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
      {invalid && isTouched && isDirty && <div>Обязательное поле</div>}
    </label>
  );
};

export default Checkbox;
