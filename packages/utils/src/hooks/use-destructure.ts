import { useMemo } from 'react';

export const useDestructure = <V>(value: V): V => {
  return useMemo(() => value, [typeof value === 'object' || Array.isArray(value) ? JSON.stringify(value) : value]);
};
