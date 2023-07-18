import { FC } from 'react';
import styles from './searchInput.module.sass';
import SearchIcon from '../../assets/icons/SearchIcon';

const SearchInput: FC = () => {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder="Search..." />
      <SearchIcon />
    </div>
  );
};

export default SearchInput;
