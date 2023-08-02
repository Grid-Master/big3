import { FC, useState, useEffect } from 'react';
import styles from './searchInput.module.sass';
import SearchIcon from '../../assets/icons/SearchIcon';
import useDebounce from '../../common/hooks/useDebounce';

interface ISerachInput {
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: FC<ISerachInput> = ({ setName }) => {
  const [value, setValue] = useState<string>('');
  const setSearchName = useDebounce(setName, 300);
  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setSearchName(e.target.value);
  };

  useEffect(() => {
    if (value === '') {
      setName(value);
    }
  }, [value]);

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handleValue}
      />
      <div>
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchInput;
