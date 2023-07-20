import { FC } from 'react';
import { useController, Control } from 'react-hook-form';
import styles from './checkbox.module.sass';

interface ICheckbox {
  name: string;
  label: string;
  control: Control<any>;
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
  return (
    <label className={styles.checkbox}>
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
