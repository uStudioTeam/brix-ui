import { Variable } from '@ustudio-ui/theme/entity';
import { Values } from '@ustudio-ui/utils/types';

export const setCssVariable = (prefix: Values<typeof Variable>, name: string, value: unknown): string => {
  return `--${prefix}-${name}: ${value}`;
};
