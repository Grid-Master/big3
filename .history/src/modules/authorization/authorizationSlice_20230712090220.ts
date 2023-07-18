import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { signUp } from './authorizationThunk';

export interface IUser {
    name: string | null
    login: string | null
    token: string | null
    avatarUrl: string | null
}

const initialState: IUser = {
  name: null,
  login: null,
  token: null,
  avatarUrl: null,
};

const authorizationSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder.addCase(signUp.pending, (state, action:PayloadAction<any>) => {
        state.
    })
  },
});
