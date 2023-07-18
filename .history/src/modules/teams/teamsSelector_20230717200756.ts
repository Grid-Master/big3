import { RootState } from '../../configs/redux/store';

export const selectTeams = (state: RootState) => state.TeamsReducer;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj: any) => obj.id === id);
