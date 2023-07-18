import { FC, useState } from 'react';
import styles from './searchInput.module.sass';
import SearchIcon from '../../assets/icons/SearchIcon';

interface ISerachInput {
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: FC<ISerachInput> = ({ setName }) => {
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder="Search..." onChange={handleName} />
      <SearchIcon />
    </div>
  );
};

export default SearchInput;
