import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './addLink.module.sass';

interface IAddLink {
  path: string;
}

const AddLink: FC<IAddLink> = ({ path }) => {
  return (
    <Link className={styles.link} to={path}>
      Add +
    </Link>
  );
};

export default AddLink;
