import { useEffect, useState } from 'react';

export const useUnmountOnExit = (
  isOpen: boolean,
  unmountOnExit?: boolean
): [shouldBeOpen: boolean, shouldMount: boolean] => {
  const [shouldUnmount, setUnmount] = useState(unmountOnExit);
  const [shouldMount, setMount] = useState(!unmountOnExit);
  const [openControl, setOpenControl] = useState(isOpen && shouldMount);

  useEffect(() => {
    setUnmount(unmountOnExit);
  }, [unmountOnExit]);

  useEffect(() => {
    if (shouldUnmount) {
      // eslint-disable-next-line immutable/no-let
      let timeoutId: NodeJS.Timeout;

      if (isOpen) {
        setMount(true);

        timeoutId = setTimeout(() => setOpenControl(true), 0);
      } else {
        setOpenControl(false);

        timeoutId = setTimeout(() => setMount(false), 200);
      }

      return () => clearTimeout(timeoutId);
    } else {
      setOpenControl(isOpen);
    }
  }, [isOpen, shouldUnmount]);

  return [openControl, shouldMount];
};
