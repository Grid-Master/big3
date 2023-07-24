import { createAsyncThunk } from '@reduxjs/toolkit';
import { IFetchTeamsParams, ITeam } from '../../api/dto/ITeams';
import { RootState } from '../../configs/redux/store';
import { IInitial } from '../../common/interfaces/IInitial';
import { get, post } from '../../api/baseRequest';

export const addTeam = createAsyncThunk<ITeam, Omit<ITeam, 'id'>, { state: RootState }>(
  'newteam',
  async (body, { getState }) => {
    const { token } = getState().AuthorizationReducer;
    if (token) {
      const res = await post(`/Team/Add`, JSON.stringify(body), token);
      return res;
    }
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
    return res;
  }
});
export const getAllTeams = createAsyncThunk<any, any, { state: RootState }>(
  'get all teams',
  async (params, { getState }) => {
    const { token } = getState().AuthorizationReducer;
    if (token) {
      const res = await get(`/Team/GetTeams`, token);
      console.log(params);
      console.log(res.count);
      return 2;
    }
  },
);
