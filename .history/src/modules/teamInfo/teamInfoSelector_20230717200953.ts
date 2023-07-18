import { RootState } from '../../configs/redux/store';

export const selectTeamInfo = (state: RootState) => state.TeamInfoReducer;
