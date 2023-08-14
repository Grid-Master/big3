import { AnyAction, AsyncThunk, Dispatch } from '@reduxjs/toolkit';
import { ICustomError } from '../../../common/interfaces/ICustomError';

export interface ITeam {
  id: number;
  name: string | null;
  foundationYear: number | null;
  division: string | null;
  conference: string | null;
  imageUrl: string | null;
  isLoading: boolean;
  error: number | null | undefined;
}

export interface IFetchTeamsParams {
  name: string;
  page: number;
  pageSize: number;
}

export type GetAllTeams = AsyncThunk<
  ITeam[],
  void,
  {
    rejectValue: ICustomError;
    state?: unknown;
    dispatch?: Dispatch<AnyAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
  }
>;
