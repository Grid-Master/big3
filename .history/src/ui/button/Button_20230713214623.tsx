import { FC, MouseEventHandler, ReactNode } from 'react';

interface IButton {
  onClick: any;
  children: ReactNode;
}

const Button: FC<IButton> = ({ onClick, children }) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    onClick();
  };
  return <button>{children}</button>;
};

export default Button;
