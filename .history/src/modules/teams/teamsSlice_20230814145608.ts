import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { addTeam, getTeams } from './teamsThunk';
import { ITeam } from './interfaces/ITeams';
import { IInitial } from '../../common/interfaces/IInitial';
import { ICustomError } from '../../common/interfaces/ICustomError';

const initialState: IInitial<ITeam[]> = {
  data: [],
  count: 0,
  page: 1,
  size: 25,
  isLoading: false,
  error: null,
};

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {},
  extraReducers(builder) {
    //add new team
    builder.addCase(addTeam.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addTeam.fulfilled, (state, action: PayloadAction<ITeam>) => {
      state.isLoading = false;
      state.data.push(action.payload);
      state.count = state.data.length;
    });
    builder.addCase(addTeam.rejected, (state, action: PayloadAction<ICustomError | undefined>) => {
      state.isLoading = false;
      state.error = action.payload?.status;
    });
    //get teams
    builder.addCase(getTeams.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getTeams.fulfilled, (state, action: PayloadAction<IInitial<ITeam[]>>) => {
      state.isLoading = false;
      state.data = action.payload.data || [];
      state.count = action.payload.count;
      state.page = action.payload.page;
      state.size = action.payload.size;
    });
    builder.addCase(getTeams.rejected, (state, action: PayloadAction<ICustomError | undefined>) => {
      state.isLoading = false;
      state.error = action.payload?.status;
    });
  },
});

export default teamsSlice.reducer;
