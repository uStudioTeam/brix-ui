import { Variable } from '@brix-ui/types/css';

import type { Values } from '../types';

export const getCssVariable = (prefix: Values<typeof Variable>, name: string): string => `var(--${prefix}-${name})`;
