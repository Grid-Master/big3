import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../configs/redux/store';
import { get } from '../../api/baseRequest';

export const getPositions = createAsyncThunk<string[], void, { state: RootState }>(
  'getpositions',
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().AuthorizationReducer;
    try {
      if (token) {
        const res = await get(`/Player/GetPositions`, token);
        return res;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
