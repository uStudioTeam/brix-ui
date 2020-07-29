import { useMemo } from 'react';

export const useDestructure = <V>(value: V): V => useMemo(() => value, [value]);
