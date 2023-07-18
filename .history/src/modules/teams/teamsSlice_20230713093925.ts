import { createSlice } from '@reduxjs/toolkit';
import { addTeam, getTeams } from './teamsThunk';
import { ITeam } from '../../api/dto/ITeams';

const teamsSlice = createSlice({
  name: 'teams',
  initialState: { teams: [] as ITeam[] },
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
