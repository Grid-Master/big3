import { FC } from 'react';
import TeamsIcon from '../../../assets/icons/TeamsIcon';
import PlayersIcon from '../../../assets/icons/PlayersIcon';
import styles from './menu.module.sass';

const Menu: FC = () => {
  return (
    <div className={styles.menu}>
      <div>
        <div>
          <TeamsIcon />
          <a>Teams</a>
        </div>
        <div>
          <PlayersIcon />
          <a>Players</a>
        </div>
      </div>
      <button className={styles.button}>Sign out</button>
    </div>
  );
};

export default Menu;
