import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPlayer } from '../../api/dto/IPlyers';

export const getPlayer = createAsyncThunk(
  'getplayer',
  async ({ id, token }: { id: number; token: string | null }) => {
    const res = await fetch('http://dev.trainee.dex-it.ru/api/Player/Get', {
      method: 'POST',
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return (await res.json()) as IPlayer;
  },
);
