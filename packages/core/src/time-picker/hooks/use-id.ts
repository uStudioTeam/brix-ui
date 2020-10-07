import { useMemo } from 'react';

import { safeFallback } from '@brix-ui/utils/functions';

export const useId = (name: string, id: string | undefined): string => {
  return useMemo(() => `${name} ${safeFallback(id)}`.trim(), [name, id]);
};
