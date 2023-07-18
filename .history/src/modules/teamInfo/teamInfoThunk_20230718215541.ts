import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITeam } from '../../api/dto/ITeams';
import { RootState } from '../../configs/redux/store';
import { get, remove } from '../../api/baseRequest';

export const getTeam = createAsyncThunk<ITeam, number, { state: RootState }>(
  'getteam',
  async (id, { getState }) => {
    const { token } = getState().AuthorizationReducer;
    if (token) {
      const res = await get(`/Team/Get?id=${id}`, token);
      return res;
    }
  },
);

export const deleteTeam = createAsyncThunk<ITeam, number, { state: RootState }>(
  'deleteteam',
  async (id, { getState }) => {
    const { token } = getState().AuthorizationReducer;
    if (token) {
      const res = await remove(`/Team/Delete?id=${id}`, token);
      return res;
    }
  },
);
