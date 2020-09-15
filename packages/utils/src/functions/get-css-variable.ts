import { Variable } from '@ustudio-ui/types/css';

import type { Values } from '../types';

export const getCssVariable = (prefix: Values<typeof Variable>, name: string): string => `var(--${prefix}-${name})`;
