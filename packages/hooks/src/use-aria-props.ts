import { useMemo } from 'react';

import { filterObject } from '@brix-ui/utils/functions';

const isAriaKey = <P>(key: keyof P): boolean => (key as string).startsWith('aria-');

export default function useAriaProps<P extends Record<string, any>>(
  props: P
): {
  propsWithAria: P;
  propsWithoutAria: P;
} {
  const propsWithAria = useMemo(() => filterObject(props, isAriaKey), [JSON.stringify(props)]);
  const propsWithoutAria = useMemo(() => filterObject(props, (key) => !isAriaKey(key)), [JSON.stringify(props)]);

  return {
    propsWithAria,
    propsWithoutAria,
  };
}
