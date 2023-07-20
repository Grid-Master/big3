import { FC } from 'react';
import styles from './breadcrumbs.module.sass';

interface IBreadcrumbs {
  mainLink: string;
  item: string;
  id?: number;
}

const Breadcrumbs: FC<IBreadcrumbs> = ({ mainLink, item }) => {
  return (
    <div className={styles.breadcrumbs}>
      <span>Teams</span> / <span>Denver Nuggets</span>
    </div>
  );
};

export default Breadcrumbs;
