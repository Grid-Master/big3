import { createAsyncThunk } from '@reduxjs/toolkit';
import { IChange, ISignIn, ISignUp, IUser } from '../../api/dto/IAuthorization';

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

export const signIn = createAsyncThunk('signin', async (body: ISignIn) => {
  const res = await fetch('http://dev.trainee.dex-it.ru/api/Auth/SignIn', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return (await res.json()) as IUser;
});

export const change = createAsyncThunk('change', async (body: IChange) => {
  const res = await fetch('http://dev.trainee.dex-it.ru/api/Auth/Change', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer DDSD`,
    },
  });
  return (await res.json()) as IUser;
});
