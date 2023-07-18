import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITeam } from '../../api/dto/ITeams';
import { RootState } from '../../configs/redux/store';

export const addImage = createAsyncThunk<string, File, { state: RootState }>(
  'addimage',
  async (image, { getState }) => {
    const imageBlob = new Blob([image], { type: image.type });
    const formData = new FormData();
    formData.append('file', imageBlob, image.name);
    const { token } = getState().AuthorizationReducer;
    const res = await fetch('http://dev.trainee.dex-it.ru/api/Image/SaveImage', {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return await res.json();
  },
);
