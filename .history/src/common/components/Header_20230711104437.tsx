import React, { FC } from 'react';
//@ts-ignore
import logo from '/images/logo.png';

const Header: FC = () => {
  return (
    <div>
      <img src={logo} alt="logo" />
      <div>
        <h3>John Smith</h3>
        <img />
      </div>
    </div>
  );
};

export default Header;
