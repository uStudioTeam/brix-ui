import { Breakpoint } from '@brix-ui/types/css';
import type { Values } from '@brix-ui/utils/types';

export type BreakpointsMap = Record<Values<typeof Breakpoint>, number>;
