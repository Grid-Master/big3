import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPlayer, IPlayers } from '../../api/dto/IPlyers';
import { RootState } from '../../configs/redux/store';
import { IInitial } from '../../common/interfaces/IInitial';
import { get, post } from '../../api/baseRequest';

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
  async (params, { getState }) => {
    const { token } = getState().AuthorizationReducer;
    // const res = await fetch('http://dev.trainee.dex-it.ru/api/Player/GetPlayers', {
    //   headers: {
    //     accept: 'application/json',
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    // return await res.json();
    if (token) {
      const res = await get(
        `/Player/GetPlayers?Name=${params.name}&TeamIds=${params.teamIds}&Page=${params.page}&PageSize=${params.pageSize}`,
        token,
      );
      return res;
    }
  },
);

export const addPlayer = createAsyncThunk<IPlayer, Omit<IPlayer, 'id'>, { state: RootState }>(
  'addplayer',
  async (body, { getState }) => {
    const { token } = getState().AuthorizationReducer;
    if (token) {
      const res = await post(`/Player/Add`, JSON.stringify(body), token);
      return res;
    }
  },
);
