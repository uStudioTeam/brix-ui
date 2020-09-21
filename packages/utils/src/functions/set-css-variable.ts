import { Variable } from '@brix-ui/types/css';
import type { Values } from '@brix-ui/utils/types';

export const setCssVariable = (prefix: Values<typeof Variable>, name: string, value: unknown): string => {
  return `--${prefix}-${name}: ${value}`;
};
