import { FC, useState } from 'react';
import styles from './searchInput.module.sass';
import SearchIcon from '../../assets/icons/SearchIcon';

interface ISerachInput {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: FC<ISerachInput> = ({ name, setName }) => {
  const [value, setValue] = useState<string>('');
  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const findName = () => {
    setName(value);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handleValue}
      />
      <div onClick={findName}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchInput;
