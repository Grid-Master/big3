import { createSlice } from '@reduxjs/toolkit';
import { addTeam, getTeams } from './teamsThunk';
import { IInitialTeams, ITeam } from '../../api/dto/ITeams';

const initialState: IInitialTeams = {
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
    builder.addCase(addTeam.fulfilled, (state, action) => {
      state.teams.push(action.payload);
    });
    builder.addCase(addTeam.rejected, (state, action) => {
      console.log(' add team error');
    });
    //get teams
    builder.addCase(getTeams.pending, (state, action) => {});
    builder.addCase(getTeams.fulfilled, (state, action) => {
      state.teams = action.payload;
    });
    builder.addCase(getTeams.rejected, (state, action) => {
      console.log(' get team error');
    });
  },
});

export default teamsSlice.reducer;
