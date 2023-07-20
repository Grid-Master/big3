import { FC, useState } from 'react';
import { useController } from 'react-hook-form';

interface ICheckbox {
  name: string;
  label: string;
  control: any;
}

const Checkbox: FC<ICheckbox> = ({ name, label, control }) => {
  const {
    field: { ref, ...Inputprops },
    fieldState: { invalid, isTouched, isDirty },
  } = useController({
    name,
    control,
    defaultValue: false, // Установите значение по умолчанию для вашего checkbox
  });

  const handleCheck = () => {};
  return (
    <label>
      <div>
        <img />
      </div>
      <input {...register('accept', { required: true })} type="checkbox" />
      {label}
    </label>
  );
};

export default Checkbox;
