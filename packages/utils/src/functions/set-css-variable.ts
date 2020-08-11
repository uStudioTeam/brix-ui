import { Variable } from '@ustudio-ui/types/css';
import type { Values } from '@ustudio-ui/utils/types';

export const setCssVariable = (prefix: Values<typeof Variable>, name: string, value: unknown): string => {
  return `--${prefix}-${name}: ${value}`;
};
