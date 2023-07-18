import { FC, MouseEventHandler, ReactNode } from 'react';
import styles from './button.module.sass';

interface IButton {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const Button: FC<IButton> = ({ onClick, children }) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <button disabled={true} className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
