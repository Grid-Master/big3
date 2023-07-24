import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../configs/redux/store';
import { get } from '../../api/baseRequest';

export const getPositions = createAsyncThunk<string[], void, { state: RootState }>(
  'getpositions',
  async (_, { getState }) => {
    const { token } = getState().AuthorizationReducer;
    if (token) {
      const res = await get(`/Player/GetPositions`, token);
      return res;
    }
  },
);
