import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAlert {
  showed: boolean;
  message: string;
}

const alertSlice = createSlice({
  name: 'alert',
  initialState: { showed: false, message: '' },
  reducers: {
    setAlert: (state, action: PayloadAction<IAlert>) => {
      state.showed = action.payload.showed;
      state.message = action.payload.message;
    },
  },
});

export default alertSlice.reducer;
