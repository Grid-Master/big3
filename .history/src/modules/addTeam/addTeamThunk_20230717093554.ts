import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITeam } from '../../api/dto/ITeams';
import { RootState } from '../../configs/redux/store';

export const addImage = createAsyncThunk<any, File, { state: RootState }>(
  'addimage',
  async (file, { getState }) => {
    const { token } = getState().AuthorizationReducer;
    const res = await fetch(`http://dev.trainee.dex-it.ru/api/Image/SaveImage`, {
      method: 'POST',
      body: file,
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return await res.json();
  },
);
