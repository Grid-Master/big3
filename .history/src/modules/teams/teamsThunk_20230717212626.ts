import { createAsyncThunk } from '@reduxjs/toolkit';
import { IFetchTeamsParams, ITeam } from '../../api/dto/ITeams';
import { RootState } from '../../configs/redux/store';
import { IInitial } from '../../common/interfaces/IInitial';
import { get } from '../../api/baseRequest';

export const addTeam = createAsyncThunk<ITeam, Omit<ITeam, 'id'>, { state: RootState }>(
  'newteam',
  async (body, { getState }) => {
    const { token } = getState().AuthorizationReducer;
    const res = await fetch('http://dev.trainee.dex-it.ru/api/Team/Add', {
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

export const getTeams = createAsyncThunk<
  IInitial<ITeam[]>,
  IFetchTeamsParams,
  { state: RootState }
>('get teams', async (params, { getState }) => {
  const { token } = getState().AuthorizationReducer;
  if (token) {
    const res = await get(
      `/Team/GetTeams?Name=${params.name}&Page=${params.page}&PageSize=${params.pageSize}`,
      token,
    );
    return await res;
  }
});
