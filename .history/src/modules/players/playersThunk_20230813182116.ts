import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPlayer, IPlayers } from '../../api/dto/IPlayers';
import { IInitial } from '../../common/interfaces/IInitial';
import { get, post } from '../../api/baseRequest';
import { ICustomError } from '../../common/interfaces/ICustomError';

export const getPlayers = createAsyncThunk<
  IInitial<IPlayer[]>,
  IPlayers,
  { rejectValue: ICustomError }
>('getplayers', async (params, { rejectWithValue }) => {
  try {
    const res = await get(
      `/Player/GetPlayers?Name=${params.name}&Page=${params.page}&PageSize=${
        params.pageSize
      }${params.teamIds.map((id) => '&TeamIds=' + id).join('')}`,
    );
    return res;
  } catch (error) {
    return rejectWithValue(error as ICustomError);
  }
});

export const addPlayer = createAsyncThunk<
  IPlayer,
  Omit<IPlayer, 'id'>,
  { rejectValue: ICustomError }
>('addplayer', async (body, { rejectWithValue }) => {
  try {
    const res = await post(`/Player/Add`, JSON.stringify(body));
    return res;
  } catch (error) {
    return rejectWithValue(error as ICustomError);
  }
});
