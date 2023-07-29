import { useMemo } from 'react';
import { debounce } from 'lodash-es';

const useDebounce = (callback: any, ms: number) => {
  console.log(11);
  return useMemo(() => debounce(callback, ms), [ms]);
};

export default useDebounce;
