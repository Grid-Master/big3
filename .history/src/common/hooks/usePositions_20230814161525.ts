import { useState } from 'react';
import { useAppDispatch } from './reduxHooks';
import { getPositions } from '../../modules/positions/positionsThunk';
import { unwrapResult } from '@reduxjs/toolkit';

const usePositions = async () => {
  const dispatch = useAppDispatch();
  const [positions, setPositions] = useState<string[]>([]);

  const res = await dispatch(getPositions());
  console.log('res', unwrapResult(res));
  setPositions(unwrapResult(res));

  return positions;
};

export default usePositions;
