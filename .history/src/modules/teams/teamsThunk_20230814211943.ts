import { createAsyncThunk } from '@reduxjs/toolkit';
import { IFetchTeamsParams, ITeam } from './interfaces/ITeams';
import { IInitial } from '../../common/interfaces/IInitial';
import { get, post } from '../../api/baseRequest';
import { ICustomError } from '../../common/interfaces/ICustomError';

export const addTeam = createAsyncThunk<ITeam, Omit<ITeam, 'id'>, { rejectValue: ICustomError }>(
  'newteam',
  async (body, { rejectWithValue }) => {
    try {
      const res = await post(`/Team/Add`, JSON.stringify(body));
      return res;
    } catch (error) {
      return rejectWithValue(error as ICustomError);
    }
  },
);

export const getTeams = createAsyncThunk<
  IInitial<ITeam[]>,
  IFetchTeamsParams,
  { rejectValue: ICustomError }
>('get teams', async (params, { rejectWithValue }) => {
  try {
    const res = await get(
      `/Team/GetTeSams?Name=${params.name}&Page=${params.page}&PageSize=${params.pageSize}`,
    );
    return res;
  } catch (error) {
    return rejectWithValue(error as ICustomError);
  }
});
export const getAllTeams = createAsyncThunk<ITeam[], void, { rejectValue: ICustomError }>(
  'get all teams',
  async (_, { rejectWithValue }) => {
    try {
      const res = await get(`/Team/GetTeams`);
      const teams = [];
      for (let i = 1; i <= res.page; i++) {
        const pageRes = await get(`/Team/GetTeams?Page=${i}&PageSize=25`);
        teams.push(...pageRes.data);
      }
      return teams;
    } catch (error) {
      return rejectWithValue(error as ICustomError);
    }
  },
);
