import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPlayer } from '../../api/dto/IPlyers';
import { RootState } from '../../configs/redux/store';
import { get, put, remove } from '../../api/baseRequest';

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

export const deletePlayer = createAsyncThunk<IPlayer, number, { state: RootState }>(
  'delete',
  async (id, { getState }) => {
    const { token } = getState().AuthorizationReducer;
    if (token) {
      const res = await remove(`/Player/Delete?id=${id}`, token);
      return res;
    }
  },
);

export const updatePlayer = createAsyncThunk<IPlayer, IPlayer, { state: RootState }>(
  'updateplayer',
  async (body, { getState, rejectWithValue }) => {
    const { token } = getState().AuthorizationReducer;
    const body1 = {
      name: 'vadim',
      number: 0,
      position: 'Forward',
      team: 83,
      birthday: '2023-07-27T08:45:06.120Z',
      height: 0,
      weight: 0,
      avatarUrl: 'string',
      id: 47,
    };
    try {
      if (token) {
        const res = await put(`/Team/Update`, JSON.stringify(body1), token);
        return res;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
