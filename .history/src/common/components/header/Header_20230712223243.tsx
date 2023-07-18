import { FC } from 'react';
import styles from './header.module.sass';
import logo from '../../../assets/images/logo.png';
import profileIcon from '../../../assets/icons/profile.png';
import { useAppSelector } from '../../hooks/reduxHooks';

const Header: FC = () => {
  const { name } = useAppSelector((state) => state.AuthorizationReducer);
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="logo" />
        <div className={styles.profile}>
          <h3>{name}</h3>
          <img src={profileIcon} alt="profileIcon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
