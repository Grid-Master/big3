import { FC, useState } from 'react';
import styles from './searchInput.module.sass';
import SearchIcon from '../../assets/icons/SearchIcon';

interface ISerachInput {
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: FC = () => {
  const [name, setName] = useState<string>();
  console.log(name);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        value={name}
        onChange={handleName}
      />
      <SearchIcon />
    </div>
  );
};

export default SearchInput;
