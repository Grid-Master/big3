import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { signIn } from './authorizationThunk';
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
    });
  },
});

export default authorizationSlice.reducer;
