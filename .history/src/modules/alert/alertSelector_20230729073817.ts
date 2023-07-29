import { RootState } from '../../configs/redux/store';

export const selectAlertOptions = (state: RootState) => state.AlertReducer;
