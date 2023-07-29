import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITeam } from '../../api/dto/ITeams';
import { RootState } from '../../configs/redux/store';
import { get, post, put, remove } from '../../api/baseRequest';

export const getTeam = createAsyncThunk<ITeam, number, { state: RootState }>(
  'getteam',
  async (id, { getState, rejectWithValue }) => {
    const { token } = getState().AuthorizationReducer;
    //const token = localStorage.getItem('token');
    try {
      if (token) {
        const res = await get(`/Team/Get?id=${id}`, token);
        return res;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteTeam = createAsyncThunk<ITeam, number, { state: RootState }>(
  'deleteteam',
  async (id, { getState, rejectWithValue }) => {
    const { token } = getState().AuthorizationReducer;
    //const token = localStorage.getItem('token');
    try {
      if (token) {
        const res = await remove(`/Team/Delete?id=${id}`, token);
        return res;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addImage = createAsyncThunk<string, File, { state: RootState }>(
  'addimage',
  async (image, { getState, rejectWithValue }) => {
    const formData = new FormData();
    formData.append('file', image, image.name);
    const { token } = getState().AuthorizationReducer;
    //const token = localStorage.getItem('token');
    try {
      if (token) {
        const res = await post(`/Image/SaveImage`, formData, token);
        return res;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const updateTeam = createAsyncThunk<ITeam, ITeam, { state: RootState }>(
  'update',
  async (body, { getState, rejectWithValue }) => {
    const { token } = getState().AuthorizationReducer;
    //const token = localStorage.getItem('token');
    try {
      if (token) {
        const res = await put(`/Team/Update`, JSON.stringify(body), token);
        return res;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
