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
  reducers: {},
  extraReducers: (builder) => {
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
      state.loading = false;
    });
    builder.addCase(change.rejected, (state, action) => {
      state.loading = false;
      console.log('error');
    });
  },
});

export default authorizationSlice.reducer;
