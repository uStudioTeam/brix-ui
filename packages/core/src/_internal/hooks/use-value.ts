import { useState } from 'react';

export const useValue = <V, D extends V>(value: V, defaultValue: D): [value: D, setValue: (value: D) => void] => {
  const [internalValue, setInternalValue] = useState(value ?? defaultValue);

  return [internalValue as D, setInternalValue];
};
