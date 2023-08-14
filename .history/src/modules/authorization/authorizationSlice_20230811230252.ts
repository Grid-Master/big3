import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { change, signIn, signUp } from './authorizationThunk';
import { IIntitalState, IUser } from '../../api/dto/IAuthorization';
import { ICustomError } from '../../common/interfaces/ICustomError';

const initialState: IIntitalState = {
  name: null,
  token: null,
  avatarUrl: null,
  loading: false,
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
      state.loading = false;
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
      state.loading = true;
    });
    builder.addCase(signIn.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
      state.error = null;
      state.name = payload.name;
      state.token = payload.token;
      state.avatarUrl = payload.avatarUrl;
      state.loading = false;
      localStorage.setItem('token', payload.token ? payload.token : '');
      localStorage.setItem('userName', payload.name ? payload.name : '');
    });
    builder.addCase(signIn.rejected, (state, action: PayloadAction<ICustomError | undefined>) => {
      state.loading = false;
      state.error = action.payload?.status;
    });

    //signUp
    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUp.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
      console.log(payload);
      state.name = payload.name;
      state.token = payload.token;
      state.avatarUrl = payload.avatarUrl;
      state.loading = false;
      localStorage.setItem('token', payload.token ? payload.token : '');
      localStorage.setItem('username', payload.name ? payload.name : '');
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.loading = false;
      //@ts-ignore
      state.error = action.payload.status;
      console.log(action.payload);
    });
    //change
    builder.addCase(change.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(change.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
      state.name = payload.name;
      state.avatarUrl = payload.avatarUrl;
      state.loading = false;
    });
    builder.addCase(change.rejected, (state) => {
      state.loading = false;
      console.log('error CHANGE');
    });
  },
});
export const { signOut, getToken, getUserName } = authorizationSlice.actions;

export default authorizationSlice.reducer;
