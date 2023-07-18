import { FC, MouseEventHandler, ReactNode } from 'react';

interface IButton {
  onClick: any;
  children: ReactNode;
}

const Button: FC<IButton> = ({ onClick, children }) => {
  const handleClick: any = (e: any) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
  };
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
