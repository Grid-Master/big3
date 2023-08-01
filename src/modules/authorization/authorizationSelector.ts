import { RootState } from '../../configs/redux/store';

export const selectAuthorization = (state: RootState) => state.AuthorizationReducer;
