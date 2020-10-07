import { useCallback, useState } from 'react';

export const useFocusControl = <F extends string>(
  focusOrder: F[]
): {
  focusOn: F | undefined;
  resetFocus(): void;
  passFocus(nextPosition: number | string): void;
} => {
  const [focusOn, setFocusOn] = useState<F | undefined>();

  const passFocus = useCallback(
    (nextPosition: number | string) => {
      setFocusOn((prevFocusOn) => {
        if (prevFocusOn === undefined) {
          return focusOrder[0];
        }

        if (typeof nextPosition === 'string') {
          return nextPosition as F;
        }

        switch (nextPosition) {
          case -1: {
            return prevFocusOn === focusOrder[0] ? undefined : focusOrder[focusOrder.indexOf(prevFocusOn) - 1];
          }
          case 1:
          default: {
            return prevFocusOn === focusOrder[focusOrder.length - 1]
              ? undefined
              : focusOrder[focusOrder.indexOf(prevFocusOn) + 1];
          }
        }
      });
    },
    [setFocusOn]
  );

  const resetFocus = useCallback(() => {
    setFocusOn(undefined);
  }, [setFocusOn]);

  return { focusOn, resetFocus, passFocus };
};
