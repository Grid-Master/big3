import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPlayer } from '../../api/dto/IPlayers';
import { RootState } from '../../configs/redux/store';
import { get, put, remove } from '../../api/baseRequest';

export const getPlayer = createAsyncThunk<IPlayer, number, { state: RootState }>(
  'getplayer',
  async (id, { getState }) => {
    const { token } = getState().AuthorizationReducer;
    //const token = localStorage.getItem('token');
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
    //const token = localStorage.getItem('token');
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
    //const token = localStorage.getItem('token');
    try {
      if (token) {
        const res = await put(`/Player/Update`, JSON.stringify(body), token);
        return res;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
