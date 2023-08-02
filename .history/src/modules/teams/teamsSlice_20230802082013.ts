import { PayloadAction, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import { addTeam, getTeams } from './teamsThunk';
import { ITeam } from '../../api/dto/ITeams';
import { IInitial } from '../../common/interfaces/IInitial';

const initialState: IInitial<ITeam[]> = {
  data: [],
  count: 0,
  page: 1,
  size: 25,
};

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {},
  extraReducers(builder) {
    //add new team
    builder.addCase(addTeam.pending, (state, action) => {});
    builder.addCase(addTeam.fulfilled, (state, action: PayloadAction<ITeam>) => {
      state.data.push(action.payload);
      state.count = state.data.length;
    });
    builder.addMatcher(addTeam.rejected, (state, action) => {
      console.log('add team error:', action.error.message);
    });
    //get teams
    builder.addCase(getTeams.pending, (state, action) => {});
    builder.addCase(getTeams.fulfilled, (state, action: PayloadAction<IInitial<ITeam[]>>) => {
      state.data = action.payload.data;
      state.count = action.payload.count;
      state.page = action.payload.page;
      state.size = action.payload.size;
    });
    builder.addCase(getTeams.rejected, (state, action) => {
      console.log('get teams error: ', action.error.message);
    });
  },
});

export default teamsSlice.reducer;
