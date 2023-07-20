import { RootState } from '../../configs/redux/store';

export const selectPlayers = (state: RootState) => state.PlayersReducer;
