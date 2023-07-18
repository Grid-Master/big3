import { FC, MouseEventHandler, ReactNode } from 'react';

interface IButton {
  onClick:  MouseEventHandler<HTMLButtonElement>;;
  children: ReactNode;
}

const Button: FC<IButton> = ({ onClick, children }) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    onClick(e);
  };
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
