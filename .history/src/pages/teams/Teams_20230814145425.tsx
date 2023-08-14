import { FC, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CardTeam from '../../modules/teams/components/cardTeam/CardTeam';
import styles from './teams.module.sass';
import Pagination from '../../common/components/pagination/Pagination';
import SelectCardsCount from '../../common/components/selectPageSize/SelectPageSize';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { getTeams } from '../../modules/teams/teamsThunk';
import EmptyTeamList from '../../modules/teams/components/emptyTeamList/EmptyTeamList';
import Button from '../../common/components/button/Button';
import { selectTeams } from '../../modules/teams/teamsSelector';
import { clearTeamInfo } from '../../modules/teamInfo/teamInfoSlice';
import SearchInput from '../../common/components/searchInput/SearchInput';
import NotFound from '../notFound/NotFound';

const Teams: FC = () => {
  const [name, setName] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<number>(6);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data, page, count, isLoading, error } = useAppSelector(selectTeams);
  const prevNameRef = useRef<string>(name);
  const prevSizeRef = useRef<number>(selectedSize);

  const addClick = () => {
    dispatch(clearTeamInfo());
    navigate('/addTeam');
  };

  const fetchTeams = async (name: string, page: number, pageSize: number) => {
    await dispatch(getTeams({ name, page, pageSize }));
  };

  useEffect(() => {
    console.log(error);
    if (!error) {
      if (prevNameRef.current !== name || prevSizeRef.current !== selectedSize) {
        fetchTeams(name, 1, selectedSize);
      } else {
        fetchTeams(name, currentPage, selectedSize);
      }

      prevNameRef.current = name;
      prevSizeRef.current = selectedSize;
    }
  }, [name, currentPage, selectedSize, error]);

  // if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SearchInput setName={setName} />
        <Button typeButton="add" onClick={addClick}>
          Add +
        </Button>
      </div>
      {error ? <NotFound /> : <EmptyTeamList />}
    </div>
  );
};

export default Teams;
