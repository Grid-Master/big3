import { FC, useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './players.module.sass';
import Pagination from '../../common/components/pagination/Pagination';
import SelectCardsCount from '../../common/components/selectPageSize/SelectPageSize';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { getAllTeams } from '../../modules/teams/teamsThunk';
import Button from '../../common/components/button/Button';
import { selectPlayers } from '../../modules/players/playersSelector';
import CardPlayer from '../../modules/players/components/cardPlayer/CardPlayer';
import { getPlayers } from '../../modules/players/playersThunk';
import EmptyPlayerList from '../../modules/players/components/emptyPlayersList/EmptyPlayerList';
import { unwrapResult } from '@reduxjs/toolkit';
import { clearPlayerInfo } from '../../modules/playerInfo/playerInfoSlice';
import MultiSelect, { IOption } from '../../common/components/multiSelect/MultiSelect';
import SearchInput from '../../common/components/searchInput/SearchInput';
import NotFound from '../notFound/NotFound';

const Players: FC = () => {
  const [name, setName] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<number>(6);
  const [namesOptions, setNamesOptions] = useState<IOption[]>([]);
  const [teamIds, setTeamIds] = useState<number[]>([]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data, page, count, isLoading, error } = useAppSelector(selectPlayers);
  const prevNameRef = useRef<string>(name);
  const prevSizeRef = useRef<number>(selectedSize);

  const navigateHandler = () => {
    dispatch(clearPlayerInfo());
    navigate('/addPlayer');
  };

  const fetchPlayers = async (name: string, page: number, pageSize: number) => {
    await dispatch(getPlayers({ name, page, pageSize, teamIds }));
  };

  const fetchNamesOfTeams = async () => {
    const res = await dispatch(getAllTeams());
    const unwrapedRes = unwrapResult(res);
    const options = unwrapedRes.map((team) => ({
      id: team.id,
      value: team.name,
      label: team.name,
    }));
    setNamesOptions(options);
  };

  useMemo(() => {
    fetchNamesOfTeams();
  }, []);

  useEffect(() => {
    if (prevNameRef.current !== name || prevSizeRef.current !== selectedSize) {
      fetchPlayers(name, 1, selectedSize);
    } else {
      fetchPlayers(name, currentPage, selectedSize);
    }
    prevNameRef.current = name;
    prevSizeRef.current = selectedSize;
  }, [name, currentPage, selectedSize, teamIds]);

  // if (isLoading) return <div>Loading...</div>;
  if (error === 404) return <NotFound />;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SearchInput setName={setName} />
        <MultiSelect options={namesOptions} setTeamIds={setTeamIds} />
        <div>
          <Button typeButton="add" onClick={navigateHandler}>
            Add +
          </Button>
        </div>
      </div>
      {data.length ? (
        <>
          <div className={styles.teamList}>
            {data && data.map((player) => <CardPlayer key={player.id} {...player} />)}
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
        <EmptyPlayerList />
      )}
    </div>
  );
};

export default Players;
