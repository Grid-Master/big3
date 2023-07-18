import { FC } from 'react';
import styles from './searchInput.module.sass';

const SearchInput: FC = () => {
  return (
    <div>
      <input className={styles.input} type="text" placeholder="Search..." />
    </div>
  );
};

export default SearchInput;
