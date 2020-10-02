import { useState } from 'react';

import useUpdateEffect from './use-update-effect';
import useUpdatedState from './use-updated-state';

export default function useUnmountOnExit(
  handle: boolean,
  unmountOnExit: boolean | undefined,
  transitionSpeed: number
): [internalHandle: boolean, shouldMount: boolean] {
  const [shouldUnmount] = useUpdatedState(!handle && unmountOnExit);
  const [shouldMount, setMount] = useState(handle || !unmountOnExit);
  const [internalHandle, setInternalHandle] = useUpdatedState(handle && shouldMount);

  useUpdateEffect(() => {
    if (shouldUnmount) {
      // eslint-disable-next-line immutable/no-let
      let timeoutId: ReturnType<typeof setTimeout>;

      if (handle) {
        setMount(true);

        timeoutId = setTimeout(() => setInternalHandle(true), 0);
      } else {
        setInternalHandle(false);

        timeoutId = setTimeout(() => setMount(false), transitionSpeed);
      }

      return () => clearTimeout(timeoutId);
    }
  }, [handle, shouldUnmount]);

  return [internalHandle, shouldMount];
}
