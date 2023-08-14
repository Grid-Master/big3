import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITeam } from '../../api/dto/ITeams';
import { addImage, deleteTeam, getTeam, updateTeam } from './teamInfoThunk';
import { ICustomError } from '../../common/interfaces/ICustomError';

const initialState: Omit<ITeam, 'id'> = {
  name: null,
  foundationYear: null,
  division: null,
  conference: null,
  imageUrl: null,
  isLoading: false,
  error: null,
};

const teamInfoSlice = createSlice({
  name: 'teamInfo',
  initialState,
  reducers: {
    clearTeamInfo: (state) => {
      state.name = null;
      state.foundationYear = null;
      state.division = null;
      state.conference = null;
      state.imageUrl = null;
    },
  },
  extraReducers(builder) {
    //get team
    builder.addCase(getTeam.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getTeam.fulfilled, (state, action: PayloadAction<ITeam>) => {
      state.isLoading = false;
      state.name = action.payload.name;
      state.foundationYear = action.payload.foundationYear;
      state.division = action.payload.division;
      state.conference = action.payload.conference;
      state.imageUrl = action.payload.imageUrl;
    });
    builder.addCase(getTeam.rejected, (state, action: PayloadAction<ICustomError | undefined>) => {
      state.isLoading = false;
      state.error = action.payload?.status;
    });
    //delete team
    builder.addCase(deleteTeam.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteTeam.fulfilled, (state) => {
      state.isLoading = false;
      state.name = null;
      state.foundationYear = null;
      state.division = null;
      state.conference = null;
      state.imageUrl = null;
    });
    builder.addCase(
      deleteTeam.rejected,
      (state, action: PayloadAction<ICustomError | undefined>) => {
        state.isLoading = false;
        state.error = action.payload?.status;
      },
    );
    //addImage
    builder.addCase(addImage.pending, (state, action) => {});
    builder.addCase(addImage.fulfilled, (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
      console.log(state.imageUrl);
    });
    builder.addCase(addImage.rejected, (state, action) => {
      console.log('get team error');
    });
    //updateTeam
    builder.addCase(updateTeam.pending, (state, action) => {});
    builder.addCase(updateTeam.fulfilled, (state, action: PayloadAction<ITeam>) => {
      state.name = action.payload.name;
      state.foundationYear = action.payload.foundationYear;
      state.division = action.payload.division;
      state.conference = action.payload.conference;
      state.imageUrl = action.payload.imageUrl;
    });
    builder.addCase(updateTeam.rejected, (state, action) => {
      console.log('update team error', action.error.message);
    });
  },
});

export const { clearTeamInfo } = teamInfoSlice.actions;

export default teamInfoSlice.reducer;
