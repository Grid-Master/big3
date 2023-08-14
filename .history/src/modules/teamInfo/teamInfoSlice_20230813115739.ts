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
      state.isLoading = false;
      state.error = null;
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
    builder.addCase(addImage.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addImage.fulfilled, (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.imageUrl = action.payload;
    });
    builder.addCase(addImage.rejected, (state, action: PayloadAction<ICustomError | undefined>) => {
      state.isLoading = false;
      state.error = action.payload?.status;
    });
    //updateTeam
    builder.addCase(updateTeam.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updateTeam.fulfilled, (state, action: PayloadAction<ITeam>) => {
      state.isLoading = false;
      state.name = action.payload.name;
      state.foundationYear = action.payload.foundationYear;
      state.division = action.payload.division;
      state.conference = action.payload.conference;
      state.imageUrl = action.payload.imageUrl;
    });
    builder.addCase(
      updateTeam.rejected,
      (state, action: PayloadAction<ICustomError | undefined>) => {
        state.isLoading = false;
        state.error = action.payload?.status;
      },
    );
  },
});

export const { clearTeamInfo } = teamInfoSlice.actions;

export default teamInfoSlice.reducer;
