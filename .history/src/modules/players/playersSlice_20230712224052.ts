import { createSlice } from '@reduxjs/toolkit';
import { IPlayer } from '../../api/dto/IPlyers';
import { getPlayer, getPlayers } from './playersThunk';

const playersSlice = createSlice({
  name: 'players',
  initialState: [] as IPlayer[],
  reducers: {},
  extraReducers(builder) {
    //getplayer
    builder.addCase(getPlayer.pending, (state, action) => {});
    builder.addCase(getPlayer.fulfilled, (state, action) => {});
    builder.addCase(getPlayer.rejected, (state, action) => {
      console.log('error getplayer');
      console.log(action.payload);
    });
    //getplayers
    builder.addCase(getPlayers.pending, (state, action) => {});
    builder.addCase(getPlayers.fulfilled, (state, action) => {
        state.
    });
    builder.addCase(getPlayers.rejected, (state, action) => {
      console.log('error getplayerss');
      console.log(action.payload);
    });
  },
});

export default playersSlice.reducer;
