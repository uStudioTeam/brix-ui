import { ChangeEvent, ChangeEventHandler, useCallback, useEffect, useState } from 'react';

import { tryCall } from '@brix-ui/utils/functions';

export const useValue = <V, E extends HTMLElement>(
  value: V,
  onChange: ((value: V, event: ChangeEvent<E>) => void) | undefined,
  getValue: (event: ChangeEvent<E>) => V
): [internalValue: V, handleChange: ChangeEventHandler<E>] => {
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = useCallback<ChangeEventHandler<E>>(
    (event) => {
      const nextValue = getValue(event);

      setInternalValue(nextValue);
      tryCall(onChange, nextValue, event);
    },
    [onChange]
  );

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return [internalValue, handleChange];
};
