import { FC } from 'react';
import TeamsIcon from '../../../assets/icons/TeamsIcon';
import PlayersIcon from '../../../assets/icons/PlayersIcon';
import styles from './menu.module.sass';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { signOut } from '../../../modules/authorization/authorizationSlice';

const Menu: FC = () => {
  const dispatch = useAppDispatch();

  const signOutHandle = () => {
    dispatch(signOut());
  };

  return (
    <div className={styles.menu}>
      <div>
        <div className={styles.link}>
          <TeamsIcon />
          <a>Teams</a>
        </div>
        <div className={styles.link}>
          <PlayersIcon />
          <a>Players</a>
        </div>
      </div>
      <button className={styles.button} onClick={signOutHandle}>
        Sign out
      </button>
    </div>
  );
};

export default Menu;
