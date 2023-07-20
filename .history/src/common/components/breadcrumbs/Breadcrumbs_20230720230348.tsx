import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './breadcrumbs.module.sass';

interface IBreadcrumbs {
  page: string;
  item: string | null;
}

const Breadcrumbs: FC<IBreadcrumbs> = ({ page, item }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.breadcrumbs}>
      <span onClick={() => navigate(`/${page.toLowerCase()}`)}>{page}</span>
      <span>{item}</span>
    </div>
  );
};

export default Breadcrumbs;
