import type { IntrinsicComponent, StylableComponent, BreakpointsProps } from '@ustudio-ui/types/component';

export interface CellBreakpointData {
  size?: number;
  offset?: [number?, number?];
}

export type CellBreakpoints = CellBreakpointData & BreakpointsProps<CellBreakpointData>;

export interface CellProps extends IntrinsicComponent<HTMLDivElement>, StylableComponent, CellBreakpoints {
  area?: string;
}
