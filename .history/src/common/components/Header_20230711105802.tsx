import React, { FC } from 'react';
import logo from '../../assets/images/logo.png';

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
