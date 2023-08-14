import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITeam } from '../../api/dto/ITeams';
import { RootState } from '../../configs/redux/store';
import { get, post, put, remove } from '../../api/baseRequest';
import { ICustomError } from '../../common/interfaces/ICustomError';

export const getTeam = createAsyncThunk<ITeam, number, { rejectValue: ICustomError }>(
  'getteam',
  async (id, { rejectWithValue }) => {
    try {
      const res = await get(`/Team/Get?id=${id}`);
      return res;
    } catch (error) {
      return rejectWithValue(error as ICustomError);
    }
  },
);

export const deleteTeam = createAsyncThunk<ITeam, number, { rejectValue: ICustomError }>(
  'deleteteam',
  async (id, { rejectWithValue }) => {
    try {
      const res = await remove(`/Team/Delete?id=${id}`);
      return res;
    } catch (error) {
      return rejectWithValue(error as ICustomError);
    }
  },
);

export const addImage = createAsyncThunk<string, File, { rejectValue: ICustomError }>(
  'addimage',
  async (image, { rejectWithValue }) => {
    const formData = new FormData();
    formData.append('file', image, image.name);
    try {
      const res = await post(`/Image/SaveImage`, formData);
      return res;
    } catch (error) {
      return rejectWithValue(error as ICustomError);
    }
  },
);

export const updateTeam = createAsyncThunk<ITeam, ITeam, { rejectValue: ICustomError }>(
  'update',
  async (body, { rejectWithValue }) => {
    try {
      const res = await put(`/Team/Update`, JSON.stringify(body));
      return res;
    } catch (error) {
      return rejectWithValue(error as ICustomError);
    }
  },
);
