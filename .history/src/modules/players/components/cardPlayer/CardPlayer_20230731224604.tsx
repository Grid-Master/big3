import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPlayer } from '../../../../api/dto/IPlayers';
import { useAppDispatch } from '../../../../common/hooks/reduxHooks';
import { getTeam } from '../../../teamInfo/teamInfoThunk';
import { unwrapResult } from '@reduxjs/toolkit';
import styles from './cardPlayer.module.sass';
import { getPlayer } from '../../../playerInfo/playerInfoThunk';

const CardPlayer: FC<IPlayer> = ({ name, number, id, avatarUrl, teamName }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateToPlayerInfo = async () => {
    await dispatch(getPlayer(id));
    navigate(`/players/${id}`);
  };

  return (
    <div onClick={navigateToPlayerInfo} className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={`http://dev.trainee.dex-it.ru${avatarUrl}`} alt="player" />
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
