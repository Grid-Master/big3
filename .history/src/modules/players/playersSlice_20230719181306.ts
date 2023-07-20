import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPlayer } from '../../api/dto/IPlyers';
import { addPlayer, getPlayer, getPlayers } from './playersThunk';
import { IInitial } from '../../common/interfaces/IInitial';

const initialState: IInitial<IPlayer[]> = {
  data: [],
  count: 0,
  page: 1,
  size: 25,
};

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {},
  extraReducers(builder) {
    //get players
    builder.addCase(getPlayers.pending, (state, action) => {});
    builder.addCase(getPlayers.fulfilled, (state, action: PayloadAction<IInitial<IPlayer[]>>) => {
      state.data = action.payload.data;
      state.count = action.payload.count;
      state.page = action.payload.page;
      state.size = action.payload.size;
    });
    builder.addCase(getPlayers.rejected, (state, action) => {
      console.log('error get players', action.error.message);
    });
    //add player
    builder.addCase(addPlayer.pending, (state, action) => {});
    builder.addCase(addPlayer.fulfilled, (state, action) => {
      state.data.push(action.payload);
      console.log(action.payload);
    });
    builder.addCase(addPlayer.rejected, (state, action) => {
      console.log('error addplayerss');
      console.log(action.payload);
    });
  },
});

export default playersSlice.reducer;
