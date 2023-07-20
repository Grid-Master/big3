import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITeam } from '../../api/dto/ITeams';
import { addImage, deleteTeam, getTeam, updateTeam } from './teamInfoThunk';
import { IPlayer } from '../../api/dto/IPlyers';
import { getPlayer } from './playerInfoThunk';

const initialState: Omit<IPlayer, 'id'> = {
  name: null,
  number: null,
  position: null,
  team: null,
  birthday: null,
  height: null,
  weight: null,
  avatarUrl: null,
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
    builder.addCase(getPlayer.fulfilled, (state, action) => {});
    builder.addCase(getPlayer.rejected, (state, action) => {
      console.log('error get player', action.error.message);
    });
  },
});

export const { clearPlayerInfo } = playerInfoSlice.actions;

export default playerInfoSlice.reducer;
