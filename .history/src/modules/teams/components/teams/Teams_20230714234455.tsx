import { FC } from 'react';
import Input from '../../../../ui/input/Input';
import SearchInput from '../../../../ui/searchInput/SearchInput';
import Button from '../../../../ui/button/Button';
import AddLink from '../../../../ui/addLink/AddLink';
import CardTeam from '../cardTeam/CardTeam';
import styles from './teams.module.sass';

const Teams: FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <SearchInput />
        <AddLink path="/addTeam" />
      </div>
      <div>
        <CardTeam />
      </div>
      <div>
        <div>123</div>
        <div>123</div>
      </div>
    </div>
  );
};

export default Teams;
