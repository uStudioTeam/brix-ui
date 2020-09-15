import { useEffect, useState } from 'react';
import useMount from 'honks/use-mount';

import type { SpinnerProps } from './spinner.props';

export const useDelay = (delay: SpinnerProps['delay']): boolean => {
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
};
