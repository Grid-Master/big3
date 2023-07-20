import { createAsyncThunk } from '@reduxjs/toolkit';
import { IChange, ISignIn, ISignUp, IUser } from '../../api/dto/IAuthorization';
import { RootState } from '../../configs/redux/store';
import { post } from '../../api/baseRequest';

export const signUp = createAsyncThunk<IUser, ISignUp, { state: RootState }>(
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

export const signIn = createAsyncThunk<IUser, ISignIn, { state: RootState }>(
  'signin',
  async (body, { rejectWithValue }) => {
    try {
      const res = await post(`/Auth/SignIn`, JSON.stringify(body));
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const change = createAsyncThunk<IUser, IChange, { state: RootState }>(
  'change',
  async (body, { getState }) => {
    const { token } = getState().AuthorizationReducer;
    try {
      if (token) {
        const res = await post(`/Auth/Change`, JSON.stringify(body), token);
        return res;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
