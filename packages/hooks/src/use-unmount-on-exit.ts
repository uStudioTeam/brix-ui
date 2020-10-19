import { EffectCallback, useState } from 'react';

import useUpdateEffect from './use-update-effect';
import useUpdatedState from './use-updated-state';

const withTimeout = (callback: EffectCallback, timeout: number): (() => void) => {
  const timeoutId = setTimeout(callback, timeout);

  return () => {
    clearTimeout(timeoutId);
  };
};

export default function useUnmountOnExit(
  handle: boolean,
  unmountOnExit: boolean | undefined,
  transitionSpeed: number
): [internalHandle: boolean, shouldMount: boolean] {
  const [shouldUnmount] = useUpdatedState(unmountOnExit);
  const [shouldMount, setMount] = useState(handle || !unmountOnExit);
  const [internalHandle, setInternalHandle] = useState(handle && shouldMount);

  useUpdateEffect(
    function updateMountState() {
      if (shouldUnmount) {
        if (shouldMount && !handle) {
          withTimeout(() => {
            setMount(false);
          }, transitionSpeed);
        }

        // Backup for unresolved timeout
        if (!shouldMount && handle) {
          setMount(true);
        }
      } else {
        setMount(!shouldUnmount);
      }
    },
    [handle, shouldMount, shouldUnmount, transitionSpeed]
  );

  useUpdateEffect(
    function updateOpenState() {
      if (handle && !internalHandle) {
        withTimeout(() => {
          setInternalHandle(true);
        }, 0);
      }

      // Backup for unresolved timeout
      if (internalHandle && !handle) {
        setInternalHandle(false);
      }
    },
    [handle, internalHandle]
  );

  return [internalHandle, shouldMount];
}
