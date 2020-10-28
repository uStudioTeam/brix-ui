import { useCallback, useState } from 'react';

export interface SingleSelection<V> {
  value: V | undefined;
  options: Set<V>;
  dispatch: {
    setValue(value: V): void;
    addOption(option: V): void;
    removeOption(option: V): void;
  };
}

type Dispatch<V> = SingleSelection<V>['dispatch'];

/**
 * Handles selection of a single value from the set of options
 */
export default function useSingleSelection<V>(defaultValue?: V): SingleSelection<V> {
  const [options, setOptions] = useState(
    defaultValue !== undefined ? new Set<V>([defaultValue]) : new Set<V>()
  );
  const [internalValue, setInternalValue] = useState(defaultValue);

  const setValue = useCallback<Dispatch<V>['setValue']>(
    (value) => {
      setInternalValue(value);
    },
    [setInternalValue]
  );

  const addOption = useCallback<Dispatch<V>['addOption']>(
    (option) => {
      setOptions((prevOptions) => {
        return prevOptions.add(option);
      });
    },
    [setOptions]
  );

  const removeOption = useCallback<Dispatch<V>['setValue']>(
    (option) => {
      setOptions((prevOptions) => {
        const nextOptions = new Set([...prevOptions]);

        nextOptions.delete(option);

        return nextOptions;
      });
    },
    [setOptions]
  );

  return {
    value: internalValue,
    options,
    dispatch: {
      setValue,
      addOption,
      removeOption,
    },
  };
}
