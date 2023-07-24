import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPlayer } from '../../api/dto/IPlyers';
import { RootState } from '../../configs/redux/store';
import { get, remove } from '../../api/baseRequest';

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
