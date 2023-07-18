import { FC } from 'react';
import Input from '../../../../ui/input/Input';
import SearchInput from '../../../../ui/searchInput/SearchInput';
import Button from '../../../../ui/button/Button';
import AddLink from '../../../../ui/addLink/AddLink';
import CardTeam from '../cardTeam/CardTeam';
import styles from './teams.module.sass';
import PaginationTeam from '../paginationTeam/PaginationTeam';

const Teams: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SearchInput />
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
        <div>123</div>
      </div>
    </div>
  );
};

export default Teams;
