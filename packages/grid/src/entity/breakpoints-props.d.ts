import { Breakpoint } from '@ustudio-ui/types/css';
import type { Values } from '@ustudio-ui/utils/types';

export type BreakpointsProps<T> = Partial<Record<Exclude<Values<typeof Breakpoint>, 'xs'>, T>>;
