import { createSlice } from '@reduxjs/toolkit';
import { ITeam } from '../../api/dto/ITeams';

const initialState: Omit<ITeam, 'id'> = {
  name: null,
  foundationYear: null,
  division: null,
  conference: null,
  imageUrl: null,
};

const addTeamSlice = createSlice({
  name: 'addTeam',
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

export default addTeamSlice.reducer;
