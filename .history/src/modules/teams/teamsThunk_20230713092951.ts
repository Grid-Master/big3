import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITeam } from '../../api/dto/ITeams';
import { RootState } from '../../configs/redux/store';

export const addTeam = createAsyncThunk<ITeam, ITeam, { state: RootState }>(
  'newteam',
  async (body: ITeam, { getState }) => {
    const { token } = getState().AuthorizationReducer;
    const res = await fetch('http://dev.trainee.dex-it.ru/api/Team/Add', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.json();
  },
);
