import { DOMAttributes, HTMLAttributes, useMemo } from 'react';

import { filterObject } from '@brix-ui/utils/functions';

export default function useEventProps<P extends Record<string, any>, I extends HTMLElement, E extends HTMLElement>(
  props: P
): {
  propsWithEvents: DOMAttributes<I>;
  propsWithoutEvents: HTMLAttributes<E>;
} {
  const propsWithEvents = useMemo(() => {
    return filterObject(props, (key) => (key as string).startsWith('on')) as DOMAttributes<I>;
  }, [JSON.stringify(props)]);

  const propsWithoutEvents = useMemo(() => {
    return filterObject(props, (key) => !Object.keys(propsWithEvents).includes(key as string)) as HTMLAttributes<E>;
  }, [JSON.stringify(props)]);

  return {
    propsWithEvents,
    propsWithoutEvents,
  };
}
