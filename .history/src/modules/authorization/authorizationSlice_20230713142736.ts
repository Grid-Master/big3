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
    builder.addCase(signIn.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.avatarUrl = action.payload.avatarUrl;
      state.loading = false;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.loading = false;
      console.log('error');
    });
    //signUp
    builder.addCase(signUp.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.avatarUrl = action.payload.avatarUrl;
      state.loading = false;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.loading = false;
      console.log('error');
    });
    //change
    builder.addCase(change.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(change.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.avatarUrl = action.payload.avatarUrl;
      state.loading = false;
    });
    builder.addCase(change.rejected, (state, action) => {
      state.loading = false;
      console.log('error');
    });
  },
});
export const { signOut } = authorizationSlice.actions;

export default authorizationSlice.reducer;
