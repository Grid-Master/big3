import { useMemo } from 'react';
import { debounce } from 'lodash-es';

const useDebounce = (callback: any, ms: number) => {
  return useMemo(() => debounce(callback, ms), [ms]);
};

export default useDebounce;
