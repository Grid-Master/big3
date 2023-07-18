import { RootState } from '../../configs/redux/store';

export const selectTeams = (state: RootState) => state.TeamsReducer;
