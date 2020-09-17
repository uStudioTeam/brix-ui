import { filterObject } from '@ustudio-ui/utils/functions';
import { useMemo } from 'react';

const isAriaKey = (key: string): boolean => key.startsWith('aria-');

export const useAriaProps = <P extends Record<string, any>>(
  props: P
): {
  propsWithAria: P;
  propsWithoutAria: P;
} => {
  const propsWithAria = useMemo(() => filterObject(props, isAriaKey), [JSON.stringify(props)]);
  const propsWithoutAria = useMemo(() => filterObject(props, (key) => !isAriaKey(key)), [JSON.stringify(props)]);

  return {
    propsWithAria,
    propsWithoutAria,
  };
};
