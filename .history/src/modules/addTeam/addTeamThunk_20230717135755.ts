import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITeam } from '../../api/dto/ITeams';
import { RootState } from '../../configs/redux/store';

export const addImage = createAsyncThunk<string, File, { state: RootState }>(
  'addimage',
  async (image, { getState }) => {
    const boundary = '----CustomBoundary1234567890';
    const formData =
      `--${boundary}\r\n` +
      `Content-Disposition: form-data; name="file"; filename="${image.name}"\r\n` +
      `Content-Type: ${image.type}\r\n\r\n` +
      `${image}\r\n` +
      `--${boundary}--`;
    const { token } = getState().AuthorizationReducer;
    const res = await fetch('http://dev.trainee.dex-it.ru/api/Image/SaveImage', {
      method: 'POST',
      body: formData,
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return await res.json();
  },
);
