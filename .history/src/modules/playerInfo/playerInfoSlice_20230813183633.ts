import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPlayer } from '../../api/dto/IPlayers';
import { getPlayer, updatePlayer } from './playerInfoThunk';
import { ICustomError } from '../../common/interfaces/ICustomError';

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
  isLoading: false,
  error: null,
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
      state.teamName = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers(builder) {
    //get player
    builder.addCase(getPlayer.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getPlayer.fulfilled, (state, action: PayloadAction<Omit<IPlayer, 'id'>>) => {
      state.isLoading = false;
      state.name = action.payload.name;
      state.number = action.payload.number;
      state.position = action.payload.position;
      state.team = action.payload.team;
      state.birthday = action.payload.birthday;
      state.height = action.payload.height;
      state.weight = action.payload.weight;
      state.avatarUrl = action.payload.avatarUrl;
      state.teamName = action.payload.teamName;
    });
    builder.addCase(
      getPlayer.rejected,
      (state, action: PayloadAction<ICustomError | undefined>) => {
        state.isLoading = true;
        state.error = action.payload?.status;
      },
    );
    //update player
    builder.addCase(updatePlayer.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updatePlayer.fulfilled, (state, action: PayloadAction<IPlayer>) => {
      state.isLoading = false;
      state.name = action.payload.name;
      state.number = action.payload.number;
      state.position = action.payload.position;
      state.team = action.payload.team;
      state.birthday = action.payload.birthday;
      state.height = action.payload.height;
      state.weight = action.payload.weight;
      state.avatarUrl = action.payload.avatarUrl;
      state.teamName = action.payload.teamName;
    });
    builder.addCase(
      updatePlayer.rejected,
      (state, action: PayloadAction<ICustomError | undefined>) => {
        state.isLoading = true;
        state.error = action.payload?.status;
      },
    );
  },
});

export const { clearPlayerInfo } = playerInfoSlice.actions;

export default playerInfoSlice.reducer;
