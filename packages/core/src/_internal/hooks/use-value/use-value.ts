import { useState } from 'react';

function useValue<V>(
  value: V | undefined,
  defaultValue: V | undefined
): [value: V | undefined, setValue: (value: V | undefined) => void] {
  const [internalValue, setInternalValue] = useState(value ?? defaultValue);

  return [internalValue, setInternalValue];
}

export default useValue;
