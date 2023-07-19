import { configureStore } from '@reduxjs/toolkit';
import AuthorizationReducer from '../../modules/authorization/authorizationSlice';
import PlayersReducer from '../../modules/players/playersSlice';
import TeamsReducer from '../../modules/teams/teamsSlice';
import TeamInfoReducer from '../../modules/teamInfo/teamInfoSlice';

const store = configureStore({
  reducer: { AuthorizationReducer, PlayersReducer, TeamsReducer, TeamInfoReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
