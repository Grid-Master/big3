import React, { FC } from 'react';
import logo from '../../assets/images/logo.png';
import profileIcon from '../../assets/icons/profile.png';

const Header: FC = () => {
  return (
    <div>
      <img src={logo} alt="logo" />
      <div>
        <h3>John Smith</h3>
        <img src={profileIcon} alt="profileIcon" />
      </div>
    </div>
  );
};

export default Header;
