import { AnyAction, AsyncThunk, Dispatch } from '@reduxjs/toolkit';
import { RootState } from '../../../configs/redux/store';

export type IGetPositions = AsyncThunk<
  string[],
  void,
  {
    state: RootState;
    dispatch?: Dispatch<AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
  }
>;
