import { createAsyncThunk } from '@reduxjs/toolkit';
import { ISignIn, ISignUp, IUser } from '../../api/dto/IAuthorization';

export const signUp = createAsyncThunk('signup', async (body: ISignUp) => {
  const res = await fetch('http://dev.trainee.dex-it.ru/api/Auth/SignUp', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return (await res.json()) as IUser;
});

export const signIn = createAsyncThunk(
  'signin',
  async ({ body, token }: { body: ISignIn; token: string | null }) => {
    const res = await fetch('http://dev.trainee.dex-it.ru/api/Auth/SignIn', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return (await res.json()) as IUser;
  },
);
