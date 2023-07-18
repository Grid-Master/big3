import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPlayer, IPlayers } from '../../api/dto/IPlyers';
import { RootState } from '../../configs/redux/store';

export const getPlayer = createAsyncThunk<IPlayer, number, { state: RootState }>(
  'getplayer',
  async (id, { getState }) => {
    const { token } = getState().AuthorizationReducer;
    const res = await fetch(`http://dev.trainee.dex-it.ru/api/Player/Get?id=${id}`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return (await res.json()) as IPlayer;
  },
);

export const getPlayers = createAsyncThunk<IPlayer[], IPlayers, { state: RootState }>(
  'getplayers',
  async (body, { getState }) => {
    const { token } = getState().AuthorizationReducer;
    const res = await fetch('http://dev.trainee.dex-it.ru/api/Player/GetPlayers', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.json();
  },
);
