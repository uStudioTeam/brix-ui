import { ChangeEvent, ChangeEventHandler, useCallback } from 'react';

import useUpdatedState from '@brix-ui/hooks/use-updated-state';
import { tryCall } from '@brix-ui/utils/functions';

export default function useInputValue<V, E extends HTMLInputElement | HTMLSelectElement>(
  value: V,
  onChange: ((value: V, event: ChangeEvent<E>) => void) | undefined,
  getValue: (event: ChangeEvent<E>, prevValue: V) => V
): [internalValue: V, handleChange: ChangeEventHandler<E>] {
  const [internalValue, setInternalValue] = useUpdatedState(value);

  const handleChange = useCallback<ChangeEventHandler<E>>(
    (event) => {
      setInternalValue((prevValue) => {
        const nextValue = getValue(event, prevValue);

        tryCall(onChange, nextValue, event);

        return nextValue;
      });
    },
    [setInternalValue, onChange]
  );

  return [internalValue, handleChange];
}
