import { RootState } from '../../configs/redux/store';

export const selectAlertIsShow = (state: RootState) => state.AlertReducer.showed;
export const selectAlertIsMessage = (state: RootState) => state.AlertReducer.message;
