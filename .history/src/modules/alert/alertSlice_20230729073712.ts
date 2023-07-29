import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAlert {
  showed: boolean;
  message: string;
  type: 'success' | 'failure' | null;
}

const initialState: IAlert = {
  showed: false,
  message: '',
  type: 'success',
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<IAlert>) => {
      state.showed = action.payload.showed;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
  },
});

export const { setAlert } = alertSlice.actions;

export default alertSlice.reducer;
