import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITeam } from '../../api/dto/ITeams';
import { addImage, deleteTeam, getTeam, updateTeam } from './teamInfoThunk';

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
  extraReducers(builder) {
    //get team
    builder.addCase(getTeam.pending, (state, action) => {});
    builder.addCase(getTeam.fulfilled, (state, action: PayloadAction<ITeam>) => {
      state.name = action.payload.name;
      state.foundationYear = action.payload.foundationYear;
      state.division = action.payload.division;
      state.conference = action.payload.conference;
      state.imageUrl = action.payload.imageUrl;
    });
    builder.addCase(getTeam.rejected, (state, action) => {
      console.log('get team error', action.error.message);
    });
    //delete team
    builder.addCase(deleteTeam.pending, (state, action) => {});
    builder.addCase(deleteTeam.fulfilled, (state) => {
      state.name = null;
      state.foundationYear = null;
      state.division = null;
      state.conference = null;
      state.imageUrl = null;
    });
    builder.addCase(deleteTeam.rejected, (state, action) => {
      console.log('get team error', action.error.message);
    });
    //addImage
    builder.addCase(addImage.pending, (state, action) => {});
    builder.addCase(addImage.fulfilled, (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    });
    builder.addCase(addImage.rejected, (state, action) => {
      console.log('get team error');
    });
    //updateTeam
    builder.addCase(updateTeam.pending, (state, action) => {});
    builder.addCase(updateTeam.fulfilled, (state, action: PayloadAction<ITeam>) => {});
    builder.addCase(updateTeam.rejected, (state, action) => {
      console.log('update team error', action.error.message);
    });
  },
});

export default teamInfoSlice.reducer;
