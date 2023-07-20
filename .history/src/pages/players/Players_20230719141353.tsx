import { FC, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../../ui/searchInput/SearchInput';
import CardTeam from '../../modules/teams/components/cardTeam/CardTeam';
import styles from './teams.module.sass';
import Pagination from '../../common/components/pagination/Pagination';
import SelectCardsCount from '../../common/components/selectPageSize/SelectPageSize';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { getTeams } from '../../modules/teams/teamsThunk';
import Button from '../../ui/button/Button';
import { selectTeams } from '../../modules/teams/teamsSelector';

const Players: FC = () => {
  const [name, setName] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<number>(6);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data, page, count } = useAppSelector(selectTeams);
  const prevNameRef = useRef<string>(name);
  const prevSizeRef = useRef<number>(selectedSize);

  const fetchTeams = async (name: string, page: number, pageSize: number) => {
    await dispatch(getTeams({ name, page, pageSize }));
  };

  useEffect(() => {
    if (prevNameRef.current !== name || prevSizeRef.current !== selectedSize) {
      fetchTeams(name, 1, selectedSize);
    } else {
      fetchTeams(name, currentPage, selectedSize);
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
      </div>
      {data.length ? (
        <>
          <div className={styles.teamList}>
            {data && data.map((team) => <CardTeam key={team.id} {...team} />)}
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
