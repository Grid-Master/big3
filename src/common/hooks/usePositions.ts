import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import { getPositions } from '../../modules/positions/positionsThunk';
import { unwrapResult } from '@reduxjs/toolkit';
import { selectPositions } from '../../modules/positions/positionsSelector';

export function usePositions() {
  const dispatch = useAppDispatch();
  const positions = useAppSelector(selectPositions);

  useEffect(() => {
    dispatch(getPositions());
  }, [dispatch]);

  return positions;
}

export default usePositions;
