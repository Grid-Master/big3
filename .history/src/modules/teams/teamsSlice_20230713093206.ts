import { createSlice } from '@reduxjs/toolkit';
import { addTeam } from './teamsThunk';
import { ITeam } from '../../api/dto/ITeams';

const teamsSlice = createSlice({
  name: 'teams',
  initialState: { teams: [] as ITeam[] },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addTeam.pending, (state, action) => {});
    builder.addCase(addTeam.fulfilled, (state, action) => {
      state.teams.push(action.payload);
    });
    builder.addCase(addTeam.rejected, (state, action) => {
      console.log(' add team error');
    });
  },
});

export default teamsSlice.reducer;
