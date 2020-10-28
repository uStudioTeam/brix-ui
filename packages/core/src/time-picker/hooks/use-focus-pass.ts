import { FocusEventHandler, KeyboardEventHandler, RefObject, useCallback } from 'react';

import useUpdateEffect from '@brix-ui/hooks/use-update-effect';

import { useFocusControl } from './use-focus-control';

export const useFocusPass = <E extends HTMLElement, R extends RefObject<HTMLElement>>({
  value,
  name,
  ref,
  focusOn,
  resetFocus,
  passFocus,
}: {
  value: string | undefined;
  name: string;
  ref: R;
  focusOn: string | undefined;
  passFocus: ReturnType<typeof useFocusControl>['passFocus'];
  resetFocus: ReturnType<typeof useFocusControl>['resetFocus'];
}): {
  handleKeyDown: KeyboardEventHandler<E>;
  handleFocus: FocusEventHandler<E>;
} => {
  const handleKeyDown = useCallback<KeyboardEventHandler<E>>(
    ({ key, shiftKey }) => {
      if (key === 'Tab') {
        return passFocus(shiftKey ? -1 : 1, key);
      }

      if (!shiftKey) {
        switch (key) {
          case 'Escape': {
            return resetFocus();
          }
          case 'Enter':
          case 'ArrowRight': {
            return passFocus(1, key);
          }
          case 'ArrowLeft': {
            return passFocus(-1, key);
          }
          default: {
            // eslint-disable-next-line no-useless-return
            return;
          }
        }
      }
    },
    [passFocus, resetFocus, value]
  );

  const handleFocus = useCallback<FocusEventHandler<E>>(() => {
    passFocus(name);
  }, [passFocus, name]);

  useUpdateEffect(() => {
    if (ref.current) {
      if (focusOn === name) {
        ref.current.focus();
      } else {
        // keyPressCountRef.current = 0;

        ref.current.blur();
      }
    }
  }, [focusOn, name]);

  return {
    handleKeyDown,
    handleFocus,
  };
};
