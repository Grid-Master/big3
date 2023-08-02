import { PayloadAction, createSlice, isRejectedWithValue, SerializedError } from '@reduxjs/toolkit';
import { addTeam, getTeams } from './teamsThunk';
import { ITeam } from '../../api/dto/ITeams';
import { IInitial } from '../../common/interfaces/IInitial';
import { ICustomError } from '../../common/interfaces/ICustomError';

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
    builder.addMatcher(isRejectedWithValue(addTeam), (state, action) => {
      const error: ICustomError = action.payload as ICustomError;
      console.log('add team error:', error.status);
    });
    builder.addCase(addTeam.pending, (state, action) => {});
    builder.addCase(addTeam.fulfilled, (state, action: PayloadAction<ITeam>) => {
      state.data.push(action.payload);
      state.count = state.data.length;
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
