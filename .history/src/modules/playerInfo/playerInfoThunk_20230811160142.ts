import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPlayer } from '../../api/dto/IPlayers';
import { RootState } from '../../configs/redux/store';
import { get, put, remove } from '../../api/baseRequest';

export const getPlayer = createAsyncThunk<IPlayer, number, { state: RootState }>(
  'getplayer',
  async (id) => {
    const res = await get(`/Player/Get?id=${id}`);
    return res;
  },
);

export const deletePlayer = createAsyncThunk<IPlayer, number, { state: RootState }>(
  'delete',
  async (id) => {
    const res = await remove(`/Player/Delete?id=${id}`);
    return res;
  },
);

export const updatePlayer = createAsyncThunk<IPlayer, IPlayer, { state: RootState }>(
  'updateplayer',
  async (body, { rejectWithValue }) => {
    try {
      const res = await put(`/Player/Update`, JSON.stringify(body));
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
