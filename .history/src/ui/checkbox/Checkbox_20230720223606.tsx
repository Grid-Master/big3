import { FC, useRef } from 'react';
import { useController, Control } from 'react-hook-form';
import styles from './checkbox.module.sass';

interface ICheckbox {
  name: string;
  label: string;
  control: Control<any>;
}

const Checkbox: FC<ICheckbox> = ({ name, label, control }) => {
  const checkRef = useRef<HTMLInputElement>(null);
  const {
    field: { ref, value, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: 'You must be accept the agreement.   ' },
    defaultValue: false,
  });

  const handleCheckboxClick = () => {
    if (checkRef.current) {
      checkRef.current.click();
    }
  };
  return (
    <label className={styles.checkbox} onClick={handleCheckboxClick}>
      <div className={styles.customCheck}>
        {!value ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none">
            <mask id="path-1-inside-1_18628_1513" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 0C0.895431 0 0 0.895431 0 2V10C0 11.1046 0.895431 12 2 12H10C11.1046 12 12 11.1046 12 10V2C12 0.895431 11.1046 0 10 0H2ZM2 1C1.44772 1 1 1.44772 1 2V10C1 10.5523 1.44772 11 2 11H10C10.5523 11 11 10.5523 11 10V2C11 1.44772 10.5523 1 10 1H2Z"
              />
            </mask>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 0C0.895431 0 0 0.895431 0 2V10C0 11.1046 0.895431 12 2 12H10C11.1046 12 12 11.1046 12 10V2C12 0.895431 11.1046 0 10 0H2ZM2 1C1.44772 1 1 1.44772 1 2V10C1 10.5523 1.44772 11 2 11H10C10.5523 11 11 10.5523 11 10V2C11 1.44772 10.5523 1 10 1H2Z"
              fill="#9C9C9C"
            />
            <path
              d="M1 2C1 1.44772 1.44772 1 2 1V-1C0.343146 -1 -1 0.343146 -1 2H1ZM1 10V2H-1V10H1ZM2 11C1.44772 11 1 10.5523 1 10H-1C-1 11.6569 0.343146 13 2 13V11ZM10 11H2V13H10V11ZM11 10C11 10.5523 10.5523 11 10 11V13C11.6569 13 13 11.6569 13 10H11ZM11 2V10H13V2H11ZM10 1C10.5523 1 11 1.44772 11 2H13C13 0.343146 11.6569 -1 10 -1V1ZM2 1H10V-1H2V1ZM2 2V2V0C0.89543 0 0 0.895431 0 2H2ZM2 10V2H0V10H2ZM2 10H2H0C0 11.1046 0.895431 12 2 12V10ZM10 10H2V12H10V10ZM10 10V12C11.1046 12 12 11.1046 12 10H10ZM10 2V10H12V2H10ZM10 2H12C12 0.89543 11.1046 0 10 0V2ZM2 2H10V0H2V2Z"
              fill="#9C9C9C"
              mask="url(#path-1-inside-1_18628_1513)"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none">
            <rect x="0.5" y="0.5" width="11" height="11" rx="1.5" fill="#E4163A" stroke="#E4163A" />
            <path
              d="M5.64624 8.39625C5.45124 8.59125 5.13624 8.59125 4.94124 8.39625L3.14624 6.60125C3.05262 6.50783 3 6.38101 3 6.24875C3 6.11649 3.05262 5.98967 3.14624 5.89625C3.34124 5.70125 3.65624 5.70125 3.85124 5.89625L5.29124 7.33625L8.73124 3.89625C8.92624 3.70125 9.24124 3.70125 9.43624 3.89625C9.63124 4.09125 9.63124 4.40625 9.43624 4.60125L5.64624 8.39625Z"
              fill="white"
            />
          </svg>
        )}
      </div>
      <input
        {...inputProps}
        ref={(e) => {
          ref(e);
          //checkRef.current = e
        }}
        type="checkbox"
      />
      {label}
      {error && <span>{error.message}</span>}
    </label>
  );
};

export default Checkbox;
