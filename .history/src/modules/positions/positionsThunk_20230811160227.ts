import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../configs/redux/store';
import { get } from '../../api/baseRequest';

export const getPositions = createAsyncThunk<string[], void, { state: RootState }>(
  'getpositions',
  async (_, { getState, rejectWithValue }) => {
    try {
      const res = await get(`/Player/GetPositions`);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
