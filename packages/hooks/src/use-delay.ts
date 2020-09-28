import { useEffect, useState } from 'react';

import useMount from 'honks/use-mount';

export default function useDelay(delay: number | undefined): boolean {
  const hasMounted = useMount();

  const [shouldRender, setRender] = useState(delay === undefined);

  useEffect(() => {
    if (delay !== undefined) {
      const timeoutId = setTimeout(() => {
        if (hasMounted()) {
          setRender(true);
        }
      }, delay);

      return () => {
        clearTimeout(timeoutId);
      };
    }

    return () => {
      setRender(false);
    };
  }, [delay]);

  return shouldRender;
}
