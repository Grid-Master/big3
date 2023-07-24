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
import EmptyPlayerList from '../../modules/players/components/emptyPlayersList/EmptyPlayerList';

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
    await dispatch(getPlayers({ name, page, pageSize }));
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
        <Button typeButton="add" onClick={() => navigate('/addPlayer')}>
          Add +
        </Button>
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
