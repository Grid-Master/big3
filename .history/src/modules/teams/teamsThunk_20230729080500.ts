import { createAsyncThunk } from '@reduxjs/toolkit';
import { IFetchTeamsParams, ITeam } from '../../api/dto/ITeams';
import { RootState } from '../../configs/redux/store';
import { IInitial } from '../../common/interfaces/IInitial';
import { get, post } from '../../api/baseRequest';

export const addTeam = createAsyncThunk<ITeam, Omit<ITeam, 'id'>, { state: RootState }>(
  'newteam',
  async (body, { getState, rejectWithValue }) => {
    const { token } = getState().AuthorizationReducer;
    try {
      if (token) {
        const res = await post(`/Team/Add`, JSON.stringify(body), token);
        return res;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getTeams = createAsyncThunk<
  IInitial<ITeam[]>,
  IFetchTeamsParams,
  { state: RootState }
>('get teams', async (params, { getState, rejectWithValue }) => {
  const { token } = getState().AuthorizationReducer;
  try {
    if (token) {
      const res = await get(
        `/Team/GetTeams?Name=${params.name}&Page=${params.page}&PageSize=${params.pageSize}`,
        token,
      );
      return res;
    }
  } catch (error) {
    rejectWithValue(error);
  }
});
export const getAllTeams = createAsyncThunk<ITeam[], void, { state: RootState }>(
  'get all teams',
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().AuthorizationReducer;
    try {
      if (token) {
        const res = await get(`/Team/GetTeams`, token);
        const teams = [];
        for (let i = 1; i <= res.page; i++) {
          const pageRes = await get(`/Team/GetTeams?Page=${i}&PageSize=25`, token);
          teams.push(...pageRes.data);
        }
        return teams;
      }
      return [];
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
