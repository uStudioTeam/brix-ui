import type { BlockProps } from '@ustudio-ui/core/block';
import type { IntrinsicComponent, StylableComponent, BreakpointsProps } from '@ustudio-ui/types/component';
import type { Values } from '@ustudio-ui/utils/types';
import { Direction } from '@ustudio-ui/types/css';

export interface GridBreakpointData extends Pick<BlockProps, 'gap'> {
  direction?: Values<typeof Direction>;
  template?: ((fractionsCount: number) => string) | string;
  maxWidth?: ((currentBreakpoint: number) => string) | string;
}

export type GridBreakpoints = GridBreakpointData & BreakpointsProps<GridBreakpointData>;

export interface GridProps
  extends IntrinsicComponent,
    StylableComponent,
    GridBreakpoints,
    Omit<BlockProps, 'isInline' | 'gap'> {}
