import { configureStore } from '@reduxjs/toolkit';
import AuthorizationReducer from '../../modules/authorization/authorizationSlice';
import PlayersReducer from '../../modules/players/playersSlice';
import PlayerInfoReducer from '../../modules/playerInfo/playerInfoSlice';
import PositionsReducer from '../../modules/positions/positionsSlice';
import TeamsReducer from '../../modules/teams/teamsSlice';
import TeamInfoReducer from '../../modules/teamInfo/teamInfoSlice';

const store = configureStore({
  reducer: {
    AuthorizationReducer,
    PlayersReducer,
    PlayerInfoReducer,
    PositionsReducer,
    TeamsReducer,
    TeamInfoReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
