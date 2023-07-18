import { FC } from 'react';
import styles from './searchInput.module.sass';

const SearchInput: FC = () => {
  return <input className={styles.input} type="text" placeholder="Search..." />;
};

export default SearchInput;
