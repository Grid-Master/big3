import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITeam } from '../../api/dto/ITeams';
import { RootState } from '../../configs/redux/store';

const convertFileToString = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        resolve(result);
      } else {
        reject(new Error('Failed to convert file to string'));
      }
    };

    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };

    reader.readAsBinaryString(file);
  });
};

export const addImage = createAsyncThunk<string, any, { state: RootState }>(
  'addimage',
  async (image, { getState }) => {
    const file = convertFileToString(image);
    const { token } = getState().AuthorizationReducer;
    const res = await fetch(`http://dev.trainee.dex-it.ru/api/Image/SaveImage`, {
      method: 'POST',
      //@ts-ignore
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
