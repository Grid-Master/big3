import { FC } from 'react';
import styles from './header.module.sass';
import logo from '../../../assets/images/logo.png';
import { useAppSelector } from '../../hooks/reduxHooks';
import ProfileIcon from '../../../assets/icons/ProfileIcon';

const Header: FC = () => {
  const { name } = useAppSelector((state) => state.AuthorizationReducer);
  return (
    <div className={styles.header}>
      <div className={styles.container}>
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
