import { FC, MouseEventHandler, ReactNode } from 'react';
import styles from './button.module.sass';

interface IButton {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  typeButton: string;
  disable?: boolean;
}

const Button: FC<IButton> = ({ onClick, disable, typeButton, children }) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (onClick && !disable) {
      onClick(e);
    }
  };

  return (
    <button
      className={!disable ? styles[typeButton] : `${styles[typeButton]} ${styles.disable}`}
      onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
