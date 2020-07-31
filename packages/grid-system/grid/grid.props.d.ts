import type { BlockProps } from '@ustudio-ui/core/block';
import type { IntrinsicComponent } from '@ustudio-ui/types/component';
import type { Values } from '@ustudio-ui/utils/types';
import { Direction } from '@ustudio-ui/types/css';

import type { BreakpointsProps } from '../entity';

export interface GridBreakpointData {
  direction?: Values<typeof Direction>;
  gap?: string;
  template?: ((fractions: number) => string) | string;
}

export type GridBreakpoints = GridBreakpointData & BreakpointsProps<GridBreakpointData>;

export interface GridProps extends IntrinsicComponent, GridBreakpoints, Omit<BlockProps, 'isInline'> {}
