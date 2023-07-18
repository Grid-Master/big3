import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPlayer, IPlayers } from '../../api/dto/IPlyers';

export const getPlayer = createAsyncThunk(
  'getplayer',
  async ({ id, token }: { id: number; token: string | null }) => {
    const res = await fetch(`http://dev.trainee.dex-it.ru/api/Player/Get?id=20`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return (await res.json()) as IPlayer;
  },
);

export const getPlayers = createAsyncThunk(
  'getplayers',
  async ({ body, token }: { body: IPlayers; token: string | null }) => {
    const res = await fetch('http://dev.trainee.dex-it.ru/api/Player/GetPlayers', {
      method: 'GET',
      body: JSON.stringify(body),
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.json();
  },
);
