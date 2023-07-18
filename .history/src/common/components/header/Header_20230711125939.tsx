import { FC } from 'react';
import styles from './header.module.sass';
import logo from '../../../assets/images/logo.png';
import profileIcon from '../../../assets/icons/profile.png';

const Header: FC = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
      <div>
        <h3>John Smith</h3>
        <img src={profileIcon} alt="profileIcon" />
      </div>
    </div>
  );
};

export default Header;
