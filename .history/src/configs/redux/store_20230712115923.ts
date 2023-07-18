import { configureStore } from '@reduxjs/toolkit';
import AuthorizationReducer from '../../modules/authorization/authorizationSlice';

const store = configureStore({
  reducer: { AuthorizationReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
