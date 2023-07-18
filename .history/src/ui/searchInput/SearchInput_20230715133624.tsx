import { FC, useState } from 'react';
import styles from './searchInput.module.sass';
import SearchIcon from '../../assets/icons/SearchIcon';

const SearchInput: FC = () => {
  const [name, setName] = useState<string>();
  console.log(name);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder="Search..." value={name} />
      <SearchIcon />
    </div>
  );
};

export default SearchInput;
