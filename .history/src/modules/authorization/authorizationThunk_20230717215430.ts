import { createAsyncThunk } from '@reduxjs/toolkit';
import { IChange, ISignIn, ISignUp, IUser } from '../../api/dto/IAuthorization';
import { RootState } from '../../configs/redux/store';
import { post } from '../../api/baseRequest';

export const signUp = createAsyncThunk<IUser, ISignUp>('signup', async (body) => {
  const res = await fetch('http://dev.trainee.dex-it.ru/api/Auth/SignUp', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await res.json();
});

export const signIn = createAsyncThunk<IUser, ISignIn>('signin', async (body) => {
  const res = await post(`/Auth/SignIn`, JSON.stringify(body));
  return res;
});

export const change = createAsyncThunk<IUser, IChange, { state: RootState }>(
  'change',
  async (body, { getState }) => {
    const { token } = getState().AuthorizationReducer;
    const res = await fetch('http://dev.trainee.dex-it.ru/api/Auth/Change', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.json();
  },
);
