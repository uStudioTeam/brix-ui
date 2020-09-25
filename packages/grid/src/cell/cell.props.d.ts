import type { HTMLAttributes } from 'react';

import type { IntrinsicComponent, StylableComponent, BreakpointsProps } from '@brix-ui/types/component';

export interface CellBreakpointData {
  size?: number;
  offset?: [number?, number?];
}

export type CellBreakpoints = CellBreakpointData & BreakpointsProps<CellBreakpointData>;

export interface CellProps
  extends IntrinsicComponent<HTMLAttributes<HTMLDivElement>>,
    StylableComponent,
    CellBreakpoints {
  area?: string;
}
