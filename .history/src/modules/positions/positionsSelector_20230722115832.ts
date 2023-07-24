import { RootState } from '../../configs/redux/store';

export const selectPositions = (state: RootState) => state.PositionsReducer;
