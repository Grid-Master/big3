import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { change, signIn, signUp } from './authorizationThunk';
import { IIntitalState, IUser } from '../../api/dto/IAuthorization';

const initialState: IIntitalState = {
  name: null,
  token: null,
  avatarUrl: null,
  loading: false,
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
    },
  },
  extraReducers(builder) {
    //signIn
    builder.addCase(signIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signIn.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
      state.name = payload.name;
      state.token = payload.token;
      state.avatarUrl = payload.avatarUrl;
      state.loading = false;
    });
    builder.addCase(signIn.rejected, (state) => {
      state.loading = false;
      console.log('error SIGN IN');
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
    });
    builder.addCase(signUp.rejected, (state) => {
      state.loading = false;
      console.log('error SIGN UP');
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
export const { signOut } = authorizationSlice.actions;

export default authorizationSlice.reducer;
