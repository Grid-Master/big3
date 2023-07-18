import { createSlice } from '@reduxjs/toolkit';
import { ITeam } from '../../api/dto/ITeams';

const initialState: Omit<ITeam, 'id'> = {
  name: null,
  foundationYear: null,
  division: null,
  conference: null,
  imageUrl: null,
};

const teamInfoSlice = createSlice({
  name: 'teamInfo',
  initialState,
  reducers: {},
  extraReducers(builder) {},
});
