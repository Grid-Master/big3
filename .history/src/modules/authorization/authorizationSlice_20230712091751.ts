import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { signUp } from './authorizationThunk';

export interface IUser {
  name: string | null;
  login: string | null;
  token: string | null;
  avatarUrl: string | null;
  loading: boolean;
  password?: string;
}

const initialState: IUser = {
  name: null,
  login: null,
  token: null,
  avatarUrl: null,
  loading: false,
};

const authorizationSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default authorizationSlice.reducer;
