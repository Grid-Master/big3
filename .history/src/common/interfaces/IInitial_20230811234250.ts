export interface IInitial<T> {
  data: T;
  count: number;
  page: number;
  size: number;
  isLoading: boolean;
  error: null | number;
}
