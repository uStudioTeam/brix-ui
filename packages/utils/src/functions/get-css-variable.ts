import { Variable } from '@ustudio-ui/types/css';
import type { Values } from '@ustudio-ui/utils/types';

export const getCssVariable = (prefix: Values<typeof Variable>, name: string): string => `var(--${prefix}-${name})`;
