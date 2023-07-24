import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getPositions } from './positionsThunk';

const positionsSlice = createSlice({
  name: 'positions',
  initialState: { positions: [] as string[] },
  reducers: {},
  extraReducers(builder) {
    //get positions
    builder.addCase(getPositions.pending, (state, action) => {});
    builder.addCase(getPositions.fulfilled, (state, action: PayloadAction<string[]>) => {
      state.positions = action.payload;
    });
    builder.addCase(getPositions.rejected, (state, action) => {
      console.log('error get positions', action.error.message);
    });
  },
});

export default positionsSlice.reducer;
