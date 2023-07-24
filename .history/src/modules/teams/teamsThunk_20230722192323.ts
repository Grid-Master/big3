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
export const getAllTeams = createAsyncThunk<any, void, { state: RootState }>(
  'get all teams',
  async (params, { getState }) => {
    const { token } = getState().AuthorizationReducer;
    if (token) {
      const res = await get(`/Team/GetTeams`, token);
      const teams: any = [];
      for (let i = 1; i <= Math.ceil(res.count / res.size); i++) {
        console.log(Math.ceil(res.count / res.page));
        const pageRes = await get(`/Team/GetTeams?Page=${i}&PageSize=25`, token);
        teams.push(...pageRes.data);
      }
      console.log(res);
      console.log(teams);
      return 2;
    }
  },
);
