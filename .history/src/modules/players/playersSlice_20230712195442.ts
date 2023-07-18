import { createSlice } from '@reduxjs/toolkit';
import { IPlayer } from '../../api/dto/IPlyers';

const playersSlice = createSlice({
  name: 'players',
  initialState: [] as IPlayer[],
  reducers: {},
  extraReducers(builder) {},
});
