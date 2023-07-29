import { FC, useState, useEffect } from 'react';
import styles from './roster.module.sass';
import PlayerInRoster from '../playerInRoster/PlayerInRoster';
import { useAppDispatch } from '../../../../common/hooks/reduxHooks';
import { IPlayer } from '../../../../api/dto/IPlyers';
import { getPlayers } from '../../../players/playersThunk';
import { unwrapResult } from '@reduxjs/toolkit';

interface IRoster {
  teamId: number;
}

const Roster: FC<IRoster> = ({ teamId }) => {
  const [playersInRoster, setPlayersInRoster] = useState<IPlayer[]>([]);
  const dispatch = useAppDispatch();

  const fetchPlayers = async () => {
    const res = await dispatch(getPlayers({ name: '', page: 1, pageSize: 25, teamIds: [teamId] }));
    setPlayersInRoster(unwrapResult(res).data);
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  if (!playersInRoster.length) {
    return null;
  }

  return (
    <ul className={styles.container}>
      <li className={styles.title}>Roster</li>
      <li className={styles.characteristic}>
        <div>
          #<span className={styles.player}>Player</span>
        </div>
        <div className={styles.details}>
          <span>Height</span>
          <span>Weight</span>
          <span>Age</span>
        </div>
      </li>
      {playersInRoster.map((player) => (
        <PlayerInRoster key={player.id} {...player} />
      ))}
    </ul>
  );
};

export default Roster;
