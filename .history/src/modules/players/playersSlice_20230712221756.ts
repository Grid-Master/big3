import { createSlice } from '@reduxjs/toolkit';
import { IPlayer } from '../../api/dto/IPlyers';
import { getPlayer } from './playersThunk';

const playersSlice = createSlice({
  name: 'players',
  initialState: [] as IPlayer[],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPlayer.pending, (state, action) => {});
    builder.addCase(getPlayer.fulfilled, (state, action) => {});
    builder.addCase(getPlayer.rejected, (state, action) => {
      console.log('error getplayer');
      console.log(action.payload);
    });
  },
});

export default playersSlice.reducer;
