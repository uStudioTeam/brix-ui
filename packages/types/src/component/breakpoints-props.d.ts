import type { Values } from '@brix-ui/utils/types';

import { Breakpoint } from '../css';

export type BreakpointsProps<T> = Partial<Record<Exclude<Values<typeof Breakpoint>, 'xs'>, T>>;
