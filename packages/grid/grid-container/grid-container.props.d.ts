import type { BlockProps } from '@ustudio-ui/core/block';
import { Axis } from '@ustudio-ui/types/component';
import type { IntrinsicComponent } from '@ustudio-ui/types/component';
import type { Values } from '@ustudio-ui/utils/types';
import { Direction } from '@ustudio-ui/types/css';

import type { BreakpointsProps } from '../entity';

export interface GridContainerBreakpointData {
  direction?: Values<typeof Direction>;
  gap?: Partial<Record<Values<typeof Axis>, string>> | string;
  template?: ((fractions: number) => string) | string;
  maxWidth?: ((currentBreakpoint: number) => string) | string;
}

export type GridContainerBreakpoints = GridContainerBreakpointData & BreakpointsProps<GridContainerBreakpointData>;

export interface GridContainerProps
  extends IntrinsicComponent,
    GridContainerBreakpoints,
    Omit<BlockProps, 'isInline' | 'gap'> {}
