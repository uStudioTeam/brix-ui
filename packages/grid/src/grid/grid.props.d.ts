import type { HTMLAttributes } from 'react';

import type { BlockProps } from '@brix-ui/core/block';
import type { IntrinsicComponent, StylableComponent, BreakpointsProps } from '@brix-ui/types/component';
import type { Values } from '@brix-ui/utils/types';
import { Direction } from '@brix-ui/types/css';

export interface GridBreakpointData extends Pick<BlockProps, 'gap'> {
  direction?: Values<typeof Direction>;
  template?: ((fractionsCount: number) => string) | string;
  maxWidth?: ((currentBreakpoint: number) => string) | string;
}

export type GridBreakpoints = GridBreakpointData & BreakpointsProps<GridBreakpointData>;

export interface GridProps
  extends IntrinsicComponent<HTMLAttributes<HTMLDivElement>>,
    StylableComponent,
    GridBreakpoints,
    Omit<BlockProps, 'isInline' | 'gap'> {}
