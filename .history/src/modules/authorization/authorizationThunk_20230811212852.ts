import { createAsyncThunk } from '@reduxjs/toolkit';
import { IChange, ISignIn, ISignUp, IUser } from '../../api/dto/IAuthorization';
import { post } from '../../api/baseRequest';
import { ICustomError } from '../../common/interfaces/ICustomError';

export const signUp = createAsyncThunk<IUser, ISignUp>(
  'signup',
  async (body, { rejectWithValue }) => {
    try {
      const res = await post(`/Auth/SignUp`, JSON.stringify(body));
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const signIn = createAsyncThunk<IUser, ISignIn, { rejectValue: ICustomError }>(
  'signin',
  async (body, { rejectWithValue }) => {
    try {
      const res = await post(`/Auth/SignIn`, JSON.stringify(body));
      return res;
    } catch (error) {
      return rejectWithValue(error as ICustomError);
    }
  },
);

export const change = createAsyncThunk<IUser, IChange>(
  'change',
  async (body, { rejectWithValue }) => {
    try {
      const res = await post(`/Auth/Change`, JSON.stringify(body));
      return res;
    } catch (error) {
      return rejectWithValue(error as ICustomError);
    }
  },
);
