import { Variable } from '@ustudio-ui/theme/entity';
import { Values } from '@ustudio-ui/utils/types';

export const getCssVariable = (prefix: Values<typeof Variable>, name: string): string => `var(--${prefix}-${name})`;
