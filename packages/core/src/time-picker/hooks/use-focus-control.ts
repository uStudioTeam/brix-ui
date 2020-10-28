import { useCallback, useState } from 'react';

interface UseFocusControl<F> {
  focusOn: F | undefined;
  resetFocus(): void;
  passFocus(nextPosition: number | string, key?: string): void;
}

export const useFocusControl = <F extends string>(focusOrder: F[]): UseFocusControl<F> => {
  const [focusOn, setFocusOn] = useState<UseFocusControl<F>['focusOn']>();

  const passFocus = useCallback<UseFocusControl<F>['passFocus']>(
    (nextPosition, key) => {
      setFocusOn((prevFocusOn) => {
        if (typeof nextPosition === 'string') {
          return nextPosition as F;
        }

        if (prevFocusOn === undefined) {
          return focusOrder[0];
        }

        switch (nextPosition) {
          case -1: {
            return prevFocusOn === focusOrder[0] ? prevFocusOn : focusOrder[focusOrder.indexOf(prevFocusOn) - 1];
          }
          case 1:
          default: {
            if (key === 'Enter') {
              return undefined;
            }

            return prevFocusOn === focusOrder[focusOrder.length - 1]
              ? prevFocusOn
              : focusOrder[focusOrder.indexOf(prevFocusOn) + 1];
          }
        }
      });
    },
    [setFocusOn]
  );

  const resetFocus = useCallback<UseFocusControl<F>['resetFocus']>(() => {
    setFocusOn(undefined);
  }, [setFocusOn]);

  return { focusOn, resetFocus, passFocus };
};
