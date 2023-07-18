import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITeam } from '../../api/dto/ITeams';
import { addImage } from './addTeamThunk';

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
  extraReducers(builder) {
    builder.addCase(addImage.pending, (state, action) => {});
    builder.addCase(addImage.fulfilled, (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.imageUrl = action.payload;
    });
    builder.addCase(addImage.rejected, (state, action) => {
      console.log('get team error');
    });
  },
});

export default addTeamSlice.reducer;
