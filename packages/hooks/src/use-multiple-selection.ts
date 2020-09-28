import { useCallback, useState } from 'react';

export interface MultipleSelection<V> {
  value: Set<V>;
  options: Set<V>;
  dispatch: {
    addValue(option: V): void;
    removeValue(option: V): void;
    clearValue(): void;
    addOption(option: V): void;
    removeOption(option: V): void;
  };
}

type Dispatch<V> = MultipleSelection<V>['dispatch'];

export default function useMultipleSelection<V>(defaultValue = new Set<V>()): MultipleSelection<V> {
  const [options, setOptions] = useState(new Set<V>());
  const [internalValue, setInternalValue] = useState(defaultValue);

  const addValue = useCallback<Dispatch<V>['addValue']>(
    (option) => {
      setInternalValue((prevValue) => {
        return new Set([...prevValue, option]);
      });
    },
    [setInternalValue]
  );

  const removeValue = useCallback<Dispatch<V>['removeValue']>(
    (option) => {
      setInternalValue((prevValue) => {
        const nextValue = new Set([...prevValue]);

        nextValue.delete(option);

        return nextValue;
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
        return new Set([...prevOptions, option]);
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
      addValue,
      removeValue,
      clearValue,
      addOption,
      removeOption,
    },
  };
}
