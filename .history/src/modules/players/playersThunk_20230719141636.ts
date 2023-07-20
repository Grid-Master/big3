import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPlayer, IPlayers } from '../../api/dto/IPlyers';
import { RootState } from '../../configs/redux/store';
import { IInitial } from '../../common/interfaces/IInitial';
import { get } from '../../api/baseRequest';

export const getPlayer = createAsyncThunk<IPlayer, number, { state: RootState }>(
  'getplayer',
  async (id, { getState }) => {
    const { token } = getState().AuthorizationReducer;
    if (token) {
      const res = await get(`/Player/Get?id=${id}`, token);
      return res;
    }
  },
);

export const getPlayers = createAsyncThunk<IInitial<IPlayer[]>, IPlayers, { state: RootState }>(
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

export const addPlayer = createAsyncThunk<IPlayer, IPlayer, { state: RootState }>(
  'addplayer',
  async (body, { getState }) => {
    const { token } = getState().AuthorizationReducer;
    const res = await fetch('http://dev.trainee.dex-it.ru/api/Player/Add', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  },
);
