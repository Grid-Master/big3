import { FC } from 'react';
import styles from './breadcrumbs.module.sass';

const Breadcrumbs: FC = () => {
  return (
    <div className={styles.breadcrumbs}>
      <span>Teams</span> / <span>Denver Nuggets</span>
    </div>
  );
};

export default Breadcrumbs;
