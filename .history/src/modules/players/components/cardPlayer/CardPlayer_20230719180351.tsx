import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPlayer } from '../../../../api/dto/IPlyers';
import { useAppDispatch } from '../../../../common/hooks/reduxHooks';
import { getTeam } from '../../../teamInfo/teamInfoThunk';
import { unwrapResult } from '@reduxjs/toolkit';
import styles from './cardPlayer.module.sass';
import { getPlayer } from '../../playersThunk';

const CardPlayer: FC<IPlayer> = ({ name, number, id, team }) => {
  const navigate = useNavigate();
  const [teamName, setTeamName] = useState<string>('');
  const dispatch = useAppDispatch();

  const fetchTeam = async () => {
    const res = await dispatch(getTeam(team));
    const payload = unwrapResult(res);
    if (payload.name !== null) {
      setTeamName(payload.name);
    }
  };

  const navigateToPlayerInfo = async () => {
    await dispatch(getPlayer(id));
    navigate(`/players/${id}`);
  };

  useEffect(() => {
    fetchTeam();
  }, []);
  return (
    <div onClick={navigateToPlayerInfo} className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={`http://dev.trainee.dex-it.ru/images/a0ofoyso.png`} alt="player" />
      </div>
      <div className={styles.info}>
        <h2>
          {name} <span>#{number}</span>
        </h2>
        <p>{teamName}</p>
      </div>
    </div>
  );
};

export default CardPlayer;
