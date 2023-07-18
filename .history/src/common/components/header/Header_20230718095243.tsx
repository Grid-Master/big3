import { FC } from 'react';
import styles from './header.module.sass';
import logo from '../../../assets/images/logo.png';
import { useAppSelector } from '../../hooks/reduxHooks';
import ProfileIcon from '../../../assets/icons/ProfileIcon';
import BurgerIcon from '../../../assets/icons/BurgerIcon';

const Header: FC = () => {
  const { name } = useAppSelector((state) => state.AuthorizationReducer);
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.burger}>
          <BurgerIcon />
        </div>
        <img src={logo} alt="logo" />
        <div className={styles.profile}>
          <h3>{name}</h3>
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
