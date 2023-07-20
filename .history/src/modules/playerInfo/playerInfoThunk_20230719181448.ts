import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPlayer } from '../../api/dto/IPlyers';
import { RootState } from '../../configs/redux/store';
import { get } from '../../api/baseRequest';

export const getPlayer = createAsyncThunk<IPlayer, number, { state: RootState }>(
  'getplayer',
  async (id, { getState }) => {
    const { token } = getState().AuthorizationReducer;
    if (token) {
      const res = await get(`/Player/Get?id=${id}`, token);
      return res;
    }
  },
);
