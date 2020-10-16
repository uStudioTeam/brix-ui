import { Variable } from '@brix-ui/types/css';

import type { Values } from '../types';

export function getCssVariable(prefix: Values<typeof Variable>, name: string): string {
  return `var(--${prefix}-${name})`;
}
