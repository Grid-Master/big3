import { createSlice } from '@reduxjs/toolkit';

const teamsSlice = createSlice({
  name: 'teams',
  initialState: { teams: [] },
  reducers: {},
  extraReducers(builder) {},
});

export default teamsSlice.reducer;
