import { RootState } from '../../configs/redux/store';

export const selectAlertIsShow = (state: RootState) => state.AlertReducer.showed;
export const selectAlertMessage = (state: RootState) => state.AlertReducer.message;
