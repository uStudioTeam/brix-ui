import { ChangeEvent, ChangeEventHandler, useCallback } from 'react';

import useUpdatedState from '@brix-ui/hooks/use-updated-state';
import { tryCall } from '@brix-ui/utils/functions';

export default function useInputValue<V, E extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
  value: V,
  onChange: ((value: V, event: ChangeEvent<E>) => void) | undefined,
  getValue: (event: ChangeEvent<E>, prevValue: V) => V
): [internalValue: V, handleChange: ChangeEventHandler<E>] {
  const [internalValue, setInternalValue] = useUpdatedState(value);

  const handleChange = useCallback<ChangeEventHandler<E>>(
    (event) => {
      /**
       * This event can be gone de to unknown reason so we try to persist it
       * @see ()[https://fb.me/react-event-pooling]
       */
      event.persist();

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
