import { Breakpoint } from '@ustudio-ui/types/css';
import type { Values } from '@ustudio-ui/utils/types';

export type BreakpointsMap = Record<Values<typeof Breakpoint>, number>;
