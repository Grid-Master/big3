import { FC, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../../ui/searchInput/SearchInput';
import styles from './players.module.sass';
import Pagination from '../../common/components/pagination/Pagination';
import SelectCardsCount from '../../common/components/selectPageSize/SelectPageSize';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { getTeams } from '../../modules/teams/teamsThunk';
import Button from '../../ui/button/Button';
import { selectTeams } from '../../modules/teams/teamsSelector';
import { selectPlayers } from '../../modules/players/playersSelector';
import CardPlayer from '../../modules/players/components/cardPlayer/CardPlayer';
import { addPlayer, getPlayers } from '../../modules/players/playersThunk';

const Players: FC = () => {
  const [name, setName] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<number>(6);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data, page, count } = useAppSelector(selectPlayers);
  const prevNameRef = useRef<string>(name);
  const prevSizeRef = useRef<number>(selectedSize);

  const fetchPlayers = async (name: string, page: number, pageSize: number) => {
    await dispatch(getPlayers({ name, page, pageSize, teamIds: [51] }));
  };

  const testAdd = async () => {
    const obj = {
      name: 'vladislav2eee',
      number: 0,
      position: 'string',
      team: 62,
      //birthday: "2023-07-17T17:44:16.030Z",
      height: 0,
      weight: 0,
      avatarUrl: 'string',
    };
    //@ts-ignore
    await dispatch(addPlayer(obj));
  };

  useEffect(() => {
    if (prevNameRef.current !== name || prevSizeRef.current !== selectedSize) {
      fetchPlayers(name, 1, selectedSize);
    } else {
      fetchPlayers(name, currentPage, selectedSize);
    }
    prevNameRef.current = name;
    prevSizeRef.current = selectedSize;
  }, [name, currentPage, selectedSize]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SearchInput name={name} setName={setName} />
        <Button typeButton="add" onClick={() => navigate('/addTeam')}>
          Add +
        </Button>
        <div onClick={testAdd}>test</div>
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
        <div>пусто</div>
      )}
    </div>
  );
};

export default Players;
