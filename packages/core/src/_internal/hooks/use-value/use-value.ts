import { useState } from 'react';

export const useValue = <V>(
  value: V | undefined,
  defaultValue: V | undefined
): [value: V | undefined, setValue: (value: V | undefined) => void] => {
  const [internalValue, setInternalValue] = useState(value ?? defaultValue);

  return [internalValue, setInternalValue];
};
