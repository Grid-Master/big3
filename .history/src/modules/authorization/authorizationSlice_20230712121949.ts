import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { signIn } from './authorizationThunk';
import { IUser } from '../../api/dto/IAuthorization';

const initialState: IUser = {
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
      state.loading = false;
      console.log(action.payload);
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default authorizationSlice.reducer;
