import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITeam } from '../../api/dto/ITeams';
import { RootState } from '../../configs/redux/store';

export const addTeam = createAsyncThunk<ITeam, number, { state: RootState }>(
  'newteam',
  async (id, { getState }) => {
    const { token } = getState().AuthorizationReducer;
    const res = await fetch(`http://dev.trainee.dex-it.ru/api/Team/Get?id=${id}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
        //   'Content-Type': 'application/json',
      },
    });
    return await res.json();
  },
);
