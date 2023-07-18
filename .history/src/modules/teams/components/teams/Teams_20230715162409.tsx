import { FC, useState, useEffect } from 'react';
import Input from '../../../../ui/input/Input';
import SearchInput from '../../../../ui/searchInput/SearchInput';
import Button from '../../../../ui/button/Button';
import AddLink from '../../../../ui/addLink/AddLink';
import CardTeam from '../cardTeam/CardTeam';
import styles from './teams.module.sass';
import PaginationTeam from '../../../../common/components/pagination/Pagination';
import SelectCardsCount from '../../../../common/components/selectPageSize/SelectPageSize';
import { ITeam } from '../../../../api/dto/ITeams';
import { useAppDispatch, useAppSelector } from '../../../../common/hooks/reduxHooks';
import { getTeams } from '../../teamsThunk';

const Teams: FC = () => {
  const [name, setName] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<number>(6);
  //   const [teamList, setTeamList] = useState<ITeam[]>([]);
  const dispatch = useAppDispatch();
  const { data, page, count } = useAppSelector((data) => data.TeamsReducer);

  const fetchTeams = async () => {
    await dispatch(getTeams({}));
  };

  useEffect(() => {
    const fetchTeams = async () => {
      await dispatch(getTeams({}));
      //   setTeamList(data);
    };
    fetchTeams();
    console.log(data);
  }, [name, currentPage, selectedSize]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SearchInput name={name} setName={setName} />
        <AddLink path="/addTeam" />
      </div>
      <div className={styles.teamList}>{data && data.map((team) => <CardTeam {...team} />)}</div>
      <div className={styles.bottom}>
        <PaginationTeam
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          page={page}
          count={count}
        />
        <SelectCardsCount setSelectedSize={setSelectedSize} />
      </div>
    </div>
  );
};

export default Teams;
