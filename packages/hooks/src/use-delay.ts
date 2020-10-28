import { useEffect, useState } from 'react';

/**
 * Delays the appearance of a component by the given amount of milliseconds
 */
export default function useDelay(delay: number | undefined): boolean {
  const [hasMounted, setMounted] = useState(false);
  const [shouldRender, setRender] = useState(delay === undefined);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (delay !== undefined) {
      const timeoutId = setTimeout(() => {
        if (hasMounted) {
          setRender(true);
        }
      }, delay);

      return () => {
        clearTimeout(timeoutId);
      };
      // This return is for the effect cleanup
      // eslint-disable-next-line no-else-return
    } else {
      setRender(true);
    }

    return () => {
      setRender(false);
    };
  }, [delay, hasMounted]);

  return shouldRender;
}
