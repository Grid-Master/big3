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

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SearchInput setName={setName} />
        <AddLink path="/addTeam" />
      </div>
      <div className={styles.teamList}>
        <CardTeam />
        <CardTeam />
        <CardTeam />
        <CardTeam />
      </div>
      <div className={styles.bottom}>
        <PaginationTeam />
        <SelectCardsCount />
      </div>
    </div>
  );
};

export default Teams;
