import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPlayer } from '../../api/dto/IPlayers';
import { getPlayer, updatePlayer } from './playerInfoThunk';

const initialState: Omit<IPlayer, 'id'> = {
  name: null,
  number: null,
  position: null,
  team: null,
  birthday: null,
  height: null,
  weight: null,
  avatarUrl: null,
  teamName: null,
};

const playerInfoSlice = createSlice({
  name: 'teamInfo',
  initialState,
  reducers: {
    clearPlayerInfo: (state) => {
      state.name = null;
      state.number = null;
      state.position = null;
      state.team = null;
      state.birthday = null;
      state.height = null;
      state.weight = null;
      state.avatarUrl = null;
    },
  },
  extraReducers(builder) {
    //get player
    builder.addCase(getPlayer.pending, (state, action) => {});
    builder.addCase(getPlayer.fulfilled, (state, action: PayloadAction<Omit<IPlayer, 'id'>>) => {
      state.name = action.payload.name;
      state.number = action.payload.number;
      state.position = action.payload.position;
      state.team = action.payload.team;
      state.birthday = action.payload.birthday;
      state.height = action.payload.height;
      state.weight = action.payload.weight;
      state.avatarUrl = action.payload.avatarUrl;
    });
    builder.addCase(getPlayer.rejected, (state, action) => {
      console.log('error get player', action.error.message);
    });
    //update player
    builder.addCase(updatePlayer.pending, (state, action) => {});
    builder.addCase(updatePlayer.fulfilled, (state, action: PayloadAction<IPlayer>) => {
      state.name = action.payload.name;
      state.number = action.payload.number;
      state.position = action.payload.position;
      state.team = action.payload.team;
      state.birthday = action.payload.birthday;
      state.height = action.payload.height;
      state.weight = action.payload.weight;
      state.avatarUrl = action.payload.avatarUrl;
    });
    builder.addCase(updatePlayer.rejected, (state, action) => {
      console.log('update player error', action.error.message);
    });
  },
});

export const { clearPlayerInfo } = playerInfoSlice.actions;

export default playerInfoSlice.reducer;
