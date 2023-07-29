import { createSlice } from '@reduxjs/toolkit';

interface IAlert {
  showed: boolean;
  message: string;
}

const alertSlice = createSlice({
  name: 'alert',
  initialState: { showed: false, message: '' },
  reducers: {},
});

export default alertSlice.reducer;
