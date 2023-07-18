import { FC, useState, useEffect, useRef } from 'react';
import SearchInput from '../../ui/searchInput/SearchInput';
import AddLink from '../../ui/addLink/AddLink';
import CardTeam from '../../modules/teams/components/cardTeam/CardTeam';
import styles from './teams.module.sass';
import Pagination from '../../common/components/pagination/Pagination';
import SelectCardsCount from '../../common/components/selectPageSize/SelectPageSize';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { getTeams } from '../../modules/teams/teamsThunk';
import EmptyTeamList from '../../modules/teams/components/emptyTeamList/EmptyTeamList';

const Teams: FC = () => {
  const [name, setName] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<number>(6);
  const dispatch = useAppDispatch();
  const { data, page, count } = useAppSelector((data) => data.TeamsReducer);
  const prevNameRef = useRef<string>(name);
  const prevSizeRef = useRef<number>(selectedSize);

  const fetchTeams = async (name: string, page: number, pageSize: number) => {
    await dispatch(getTeams({ name, page, pageSize }));
    //   setTeamList(data);
  };

  useEffect(() => {
    fetchTeams(name, 1, selectedSize);
  }, [name, currentPage, selectedSize]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SearchInput name={name} setName={setName} />
        <AddLink path="/addTeam" />
      </div>
      {data.length ? (
        <>
          <div className={styles.teamList}>
            {data && data.map((team) => <CardTeam {...team} />)}
          </div>
          <div className={styles.bottom}>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              page={page}
              pageCount={Math.ceil(count / selectedSize)}
            />
            <SelectCardsCount setSelectedSize={setSelectedSize} />
          </div>
        </>
      ) : (
        <EmptyTeamList />
      )}
    </div>
  );
};

export default Teams;
