import { FC } from 'react';
import styles from './header.module.sass';
import logo from '../../../assets/images/logo.png';
import { useAppSelector } from '../../hooks/reduxHooks';
import ProfileIcon from '../../../assets/icons/ProfileIcon';
import BurgerIcon from '../../../assets/icons/BurgerIcon';

interface IHeader {
  isBurger: boolean;
  setIsBurger: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<IHeader> = ({ isBurger, setIsBurger }) => {
  const { name } = useAppSelector((state) => state.AuthorizationReducer);

  const handleBurger = () => {
    setIsBurger(!isBurger);
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.burger} onClick={handleBurger}>
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
