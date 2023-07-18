import { FC } from 'react';
import TeamsIcon from '../../../assets/icons/TeamsIcon';
import PlayersIcon from '../../../assets/icons/PlayersIcon';
import styles from './menu.module.sass';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { signOut } from '../../../modules/authorization/authorizationSlice';
import SignOut from '../../../assets/icons/SignOut';
import { Link, useLocation } from 'react-router-dom';
import ProfileIcon from '../../../assets/icons/ProfileIcon';

const Menu: FC = () => {
  const { name } = useAppSelector((state) => state.AuthorizationReducer);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const signOutHandle = () => {
    dispatch(signOut());
  };

  return (
    <>
      <div className={styles.menu}>
        <div>
          <div className={styles.profile}>
            <ProfileIcon />
            <h2>{name}</h2>
          </div>
          <Link
            to="/teams"
            className={
              pathname.toLowerCase().includes('team')
                ? `${styles.link} ${styles.active}`
                : styles.link
            }>
            <TeamsIcon />
            <p>Teams</p>
          </Link>
          <Link
            to="/players"
            className={
              pathname.toLowerCase().includes('player')
                ? `${styles.link} ${styles.active}`
                : styles.link
            }>
            <PlayersIcon />
            <p>Players</p>
          </Link>
        </div>
        <button className={styles.button} onClick={signOutHandle}>
          <SignOut />
          Sign out
        </button>
      </div>
      <div className={styles.background}></div>
    </>
  );
};

export default Menu;
