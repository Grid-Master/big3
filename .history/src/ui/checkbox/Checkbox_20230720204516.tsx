import { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';

interface ICheckbox {
  label: string;
}

const Checkbox: FC<ICheckbox> = ({ label }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const handleCheck = () => {};
  return (
    <label>
      <div>
        <img />
      </div>
      <input checked={isChecked} {...register('accept', { required: true })} type="checkbox" />
      {label}
    </label>
  );
};

export default Checkbox;
