import { createSlice } from '@reduxjs/toolkit';
import { IPlayer } from '../../api/dto/IPlyers';
import { addPlayer, getPlayer, getPlayers } from './playersThunk';

const playersSlice = createSlice({
  name: 'players',
  initialState: { players: [] as IPlayer[] },
  reducers: {},
  extraReducers(builder) {
    //getplayer
    builder.addCase(getPlayer.pending, (state, action) => {});
    builder.addCase(getPlayer.fulfilled, (state, action) => {
      state.players.push(action.payload);
    });
    builder.addCase(getPlayer.rejected, (state, action) => {
      console.log('error getplayer');
      console.log(action.payload);
    });
    //getplayers
    builder.addCase(getPlayers.pending, (state, action) => {});
    builder.addCase(getPlayers.fulfilled, (state, action) => {
      state.players = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getPlayers.rejected, (state, action) => {
      console.log('error getplayerss');
      console.log(action.payload);
    });
    //ADDplayer
    builder.addCase(addPlayer.pending, (state, action) => {});
    builder.addCase(addPlayer.fulfilled, (state, action) => {
      //@ts-ignore
      state.players.data.push(action.payload);
      console.log(action.payload);
    });
    builder.addCase(addPlayer.rejected, (state, action) => {
      console.log('error addplayerss');
      console.log(action.payload);
    });
  },
});

export default playersSlice.reducer;
