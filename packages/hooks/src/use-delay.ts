import { useEffect, useState } from 'react';

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
    } else {
      setRender(true);
    }

    return () => {
      setRender(false);
    };
  }, [delay, hasMounted]);

  return shouldRender;
}
