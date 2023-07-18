import { configureStore } from '@reduxjs/toolkit';
import AuthorizationReducer from '../../modules/authorization/authorizationSlice';
import PlayersReducer from '../../modules/players/playersSlice';

const store = configureStore({
  reducer: { AuthorizationReducer, PlayersReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
