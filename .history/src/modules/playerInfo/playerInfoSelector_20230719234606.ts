import { RootState } from '../../configs/redux/store';

export const selectPlayerInfo = (state: RootState) => state.PlayerInfoReducer;
