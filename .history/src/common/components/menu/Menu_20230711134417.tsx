import { FC } from 'react';
import TeamsIcon from '../../../assets/icons/TeamsIcon';
import styles from './menu.module.sass';

const Menu: FC = () => {
  return (
    <div className={styles.menu}>
      <div>
        <a>
          <TeamsIcon /> Teams
        </a>
        <a>Players</a>
      </div>
      <button className={styles.button}>Sign out</button>
    </div>
  );
};

export default Menu;
