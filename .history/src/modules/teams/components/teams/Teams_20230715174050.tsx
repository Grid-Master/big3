import { FC, useState, useEffect } from 'react';
import SearchInput from '../../../../ui/searchInput/SearchInput';
import AddLink from '../../../../ui/addLink/AddLink';
import CardTeam from '../cardTeam/CardTeam';
import styles from './teams.module.sass';
import Pagination from '../../../../common/components/pagination/Pagination';
import SelectCardsCount from '../../../../common/components/selectPageSize/SelectPageSize';
import { useAppDispatch, useAppSelector } from '../../../../common/hooks/reduxHooks';
import { getTeams } from '../../teamsThunk';

const Teams: FC = () => {
  const [name, setName] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<number>(6);
  //   const [teamList, setTeamList] = useState<ITeam[]>([]);
  const dispatch = useAppDispatch();
  const { data, page, count } = useAppSelector((data) => data.TeamsReducer);

  //   const fetchTeams = async () => {
  //     await dispatch(getTeams({name: '', page: 1, pageSize:6}));
  //   };

  useEffect(() => {
    const fetchTeams = async () => {
      await dispatch(getTeams({ name: '', page: 1, pageSize: 6 }));
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
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          page={page}
          pageCount={Math.ceil(count / selectedSize)}
        />
        <SelectCardsCount setSelectedSize={setSelectedSize} />
      </div>
    </div>
  );
};

export default Teams;
