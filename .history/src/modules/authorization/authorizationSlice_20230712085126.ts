import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  login: null,
  token: null,
  avatarUrl: null,
};

const authorizationSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {},
});
