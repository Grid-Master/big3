import { FC } from 'react';
import Input from '../../../../ui/input/Input';
import SearchInput from '../../../../ui/searchInput/SearchInput';
import Button from '../../../../ui/button/Button';
import AddLink from '../../../../ui/addLink/AddLink';

const Teams: FC = () => {
  return (
    <div>
      <div>
        <SearchInput />
        <AddLink path="/addTeam" />
      </div>
    </div>
  );
};

export default Teams;
