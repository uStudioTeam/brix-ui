import { useCallback, KeyboardEventHandler } from 'react';

export default function useKeyPressHandle<E = HTMLElement>(callback: KeyboardEventHandler<E>, key: string) {
  return useCallback<typeof callback>(
    (event) => {
      if (event.key === key) {
        callback(event);
      }
    },
    [callback, key]
  );
}
