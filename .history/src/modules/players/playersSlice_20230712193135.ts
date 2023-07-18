import { createSlice } from '@reduxjs/toolkit';
import { IPlayers } from '../../api/dto/IPlyers';

const playersSlice = createSlice({
  name: 'players',
  initialState: [] as IPlayers[],
  reducers: {},
  extraReducers(builder) {},
});
