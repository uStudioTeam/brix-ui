import { useCallback, useState } from 'react';

export interface MultipleSelection<V> {
  value: Set<V>;
  options: Set<V>;
  dispatch: {
    updateValue(value: V): void;
    clearValue(): void;
    addOption(option: V): void;
    removeOption(option: V): void;
  };
}

type Dispatch<V> = MultipleSelection<V>['dispatch'];

/**
 * Handles selection of multiple values from the set of options
 */
export default function useMultipleSelection<V>(defaultValue = new Set<V>()): MultipleSelection<V> {
  const [options, setOptions] = useState(defaultValue);
  const [internalValue, setInternalValue] = useState(defaultValue);

  const updateValue = useCallback<Dispatch<V>['updateValue']>(
    (option) => {
      setInternalValue((prevValue) => {
        const nextValue = new Set([...prevValue]);

        if (nextValue.has(option)) {
          nextValue.delete(option);

          return nextValue;
        }

        return nextValue.add(option);
      });
    },
    [setInternalValue]
  );

  const clearValue = useCallback<Dispatch<V>['clearValue']>(() => {
    setInternalValue(new Set<V>());
  }, [setInternalValue]);

  const addOption = useCallback<Dispatch<V>['addOption']>(
    (option) => {
      setOptions((prevOptions) => {
        return prevOptions.add(option);
      });
    },
    [setOptions]
  );

  const removeOption = useCallback<Dispatch<V>['removeOption']>(
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
      updateValue,
      clearValue,
      addOption,
      removeOption,
    },
  };
}
