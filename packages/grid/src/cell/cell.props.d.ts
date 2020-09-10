import type { IntrinsicComponent, StylableComponent } from '@ustudio-ui/types/component';

import type { BreakpointsProps } from '../entity';

export interface CellBreakpointData {
  size?: number;
  offset?: [number?, number?];
}

export type CellBreakpoints = CellBreakpointData & BreakpointsProps<CellBreakpointData>;

export interface CellProps extends IntrinsicComponent<HTMLDivElement>, StylableComponent, CellBreakpoints {
  area?: string;
}
