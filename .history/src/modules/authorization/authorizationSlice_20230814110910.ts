import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { change, signIn, signUp } from './authorizationThunk';
import { IIntitalState, IUser } from './interfaces/IAuthorization';
import { ICustomError } from '../../common/interfaces/ICustomError';

const initialState: IIntitalState = {
  name: null,
  token: null,
  avatarUrl: null,
  isLoading: false,
  error: null,
};

const authorizationSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signOut: (state) => {
      state.name = null;
      state.token = null;
      state.avatarUrl = null;
      state.isLoading = false;
      localStorage.setItem('token', '');
      localStorage.setItem('userName', '');
    },
    getToken: (state) => {
      state.token = localStorage.getItem('token');
    },
    getUserName: (state) => {
      state.name = localStorage.getItem('userName');
    },
  },
  extraReducers(builder) {
    //signIn
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signIn.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.name = payload.name;
      state.token = payload.token;
      state.avatarUrl = payload.avatarUrl;
      localStorage.setItem('token', payload.token ? payload.token : '');
      localStorage.setItem('userName', payload.name ? payload.name : '');
    });
    builder.addCase(signIn.rejected, (state, action: PayloadAction<ICustomError | undefined>) => {
      state.isLoading = false;
      state.error = action.payload?.status;
    });

    //signUp
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signUp.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.name = payload.name;
      state.token = payload.token;
      state.avatarUrl = payload.avatarUrl;
      localStorage.setItem('token', payload.token ? payload.token : '');
      localStorage.setItem('username', payload.name ? payload.name : '');
    });
    builder.addCase(signUp.rejected, (state, action: PayloadAction<ICustomError | undefined>) => {
      state.isLoading = false;
      state.error = action.payload?.status;
    });

    //changeUser
    builder.addCase(change.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(change.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.name = payload.name;
      state.avatarUrl = payload.avatarUrl;
    });
    builder.addCase(change.rejected, (state, action: PayloadAction<ICustomError | undefined>) => {
      state.isLoading = false;
      state.error = action.payload?.status;
    });
  },
});
export const { signOut, getToken, getUserName } = authorizationSlice.actions;

export default authorizationSlice.reducer;
