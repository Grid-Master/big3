import { FC } from 'react';
import styles from './menu.module.sass';

const Menu: FC = () => {
  return (
    <div className={styles.menu}>
      <div>
        <a>Teams</a>
        <a>Players</a>
      </div>
      <button>Sign out</button>
    </div>
  );
};

export default Menu;
