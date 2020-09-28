import { ChangeEvent, ChangeEventHandler, useCallback } from 'react';

import useUpdatedState from '@brix-ui/hooks/use-updated-state';
import { tryCall } from '@brix-ui/utils/functions';

export const useValue = <V, E extends HTMLElement>(
  value: V,
  onChange: ((value: V, event: ChangeEvent<E>) => void) | undefined,
  getValue: (event: ChangeEvent<E>) => V
): [internalValue: V, handleChange: ChangeEventHandler<E>] => {
  const [internalValue, setInternalValue] = useUpdatedState(value);

  const handleChange = useCallback<ChangeEventHandler<E>>(
    (event) => {
      const nextValue = getValue(event);

      setInternalValue(nextValue);
      tryCall(onChange, nextValue, event);
    },
    [onChange]
  );

  return [internalValue, handleChange];
};
