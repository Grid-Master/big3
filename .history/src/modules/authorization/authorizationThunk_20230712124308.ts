import { createAsyncThunk } from '@reduxjs/toolkit';

import { ISignIn, IUser } from '../../api/dto/IAuthorization';

export const signIn = createAsyncThunk('signin', async (token, body) => {
  const res = await fetch('http://dev.trainee.dex-it.ru/api/Auth/SignIn', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return (await res.json()) as IUser;
});
