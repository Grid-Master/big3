import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { addPlayer, getPlayers } from './playersThunk';
import { IInitial } from '../../common/interfaces/IInitial';
import { ICustomError } from '../../common/interfaces/ICustomError';
import { IPlayer } from './interfaces/IPlayers';

const initialState: IInitial<IPlayer[]> = {
  data: [],
  count: 0,
  page: 1,
  size: 25,
  isLoading: false,
  error: null,
};

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {},
  extraReducers(builder) {
    //get players
    builder.addCase(getPlayers.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getPlayers.fulfilled, (state, action: PayloadAction<IInitial<IPlayer[]>>) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.count = action.payload.count;
      state.page = action.payload.page;
      state.size = action.payload.size;
    });
    builder.addCase(
      getPlayers.rejected,
      (state, action: PayloadAction<ICustomError | undefined>) => {
        state.isLoading = false;
        state.error = action.payload?.status;
      },
    );
    //add player
    builder.addCase(addPlayer.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addPlayer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(
      addPlayer.rejected,
      (state, action: PayloadAction<ICustomError | undefined>) => {
        state.isLoading = false;
        state.error = action.payload?.status;
      },
    );
  },
});

export default playersSlice.reducer;
