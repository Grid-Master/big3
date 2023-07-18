import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITeam } from '../../api/dto/ITeams';
import { RootState } from '../../configs/redux/store';
import { post } from '../../api/baseRequest';

export const addImage = createAsyncThunk<string, File, { state: RootState }>(
  'addimage',
  async (image, { getState }) => {
    const formData = new FormData();
    formData.append('file', image, image.name);
    const { token } = getState().AuthorizationReducer;
    if (token) {
      const res = await post(`/Image/SaveImage`, formData, token);
      return res;
    }
  },
);
