import { FC, useEffect, useState } from 'react';
import { IPlayer } from '../../../../api/dto/IPlyers';
import { useAppDispatch } from '../../../../common/hooks/reduxHooks';
import { getTeam } from '../../../teamInfo/teamInfoThunk';
import { unwrapResult } from '@reduxjs/toolkit';
import styles from './cardPlayer.module.sass';

const CardPlayer: FC<IPlayer> = ({ name, number, id, team }) => {
  const [teamName, setTeamName] = useState<string>('');
  const dispatch = useAppDispatch();

  const fetchTeam = async () => {
    const res = await dispatch(getTeam(team));
    const payload = unwrapResult(res);
    if (payload.name !== null) {
      setTeamName(payload.name);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={`http://dev.trainee.dex-it.ru/images/a0ofoyso.png`} alt="player" />
      </div>
      <div>
        <h2>
          {name} <span>#{number}</span>
        </h2>
        <p>{teamName}</p>
      </div>
    </div>
  );
};

export default CardPlayer;
