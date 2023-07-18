import { FC, MouseEventHandler, ReactNode } from 'react';
import styles from './button.module.sass';

interface IButton {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  disable?: boolean;
}

const Button: FC<IButton> = ({ onClick, disable, children }) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={disable ? styles.button : `${styles.button} ${styles.disable}`}
      onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
