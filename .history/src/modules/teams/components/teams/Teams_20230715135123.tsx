import { FC, useState } from 'react';
import Input from '../../../../ui/input/Input';
import SearchInput from '../../../../ui/searchInput/SearchInput';
import Button from '../../../../ui/button/Button';
import AddLink from '../../../../ui/addLink/AddLink';
import CardTeam from '../cardTeam/CardTeam';
import styles from './teams.module.sass';
import PaginationTeam from '../../../../common/components/pagination/Pagination';
import SelectCardsCount from '../../../../common/components/selectPageSize/SelectPageSize';

const Teams: FC = () => {
  const [name, setName] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<number>(6);
  console.log(selectedSize);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SearchInput name={name} setName={setName} />
        <AddLink path="/addTeam" />
      </div>
      <div className={styles.teamList}>
        <CardTeam />
        <CardTeam />
        <CardTeam />
        <CardTeam />
      </div>
      <div className={styles.bottom}>
        <PaginationTeam currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <SelectCardsCount setSelectedSize={setSelectedSize} />
      </div>
    </div>
  );
};

export default Teams;
