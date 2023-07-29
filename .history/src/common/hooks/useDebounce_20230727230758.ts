import { useMemo } from 'react';
import { debounce } from 'lodash-es';

const useDebounce = <T extends (...args: any[]) => void>(callback: T, ms: number) => {
  return useMemo(() => debounce(callback, ms), [callback, ms]);
};

export default useDebounce;
