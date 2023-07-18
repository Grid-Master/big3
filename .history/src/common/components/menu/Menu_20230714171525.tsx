import { FC } from 'react';
import TeamsIcon from '../../../assets/icons/TeamsIcon';
import PlayersIcon from '../../../assets/icons/PlayersIcon';
import styles from './menu.module.sass';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { signOut } from '../../../modules/authorization/authorizationSlice';
import SignOut from '../../../assets/icons/SignOut';
import { Link } from 'react-router-dom';

const Menu: FC = () => {
  const dispatch = useAppDispatch();

  const signOutHandle = () => {
    dispatch(signOut());
  };

  return (
    <div className={styles.menu}>
      <div>
        <Link to="/teams" className={styles.link}>
          <TeamsIcon />
          <p>Teams</p>
        </Link>
        <Link to="/players" className={styles.link}>
          <PlayersIcon />
          <p>Players</p>
        </Link>
      </div>
      <button className={styles.button} onClick={signOutHandle}>
        <SignOut />
        Sign out
      </button>
    </div>
  );
};

export default Menu;
