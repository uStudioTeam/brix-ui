import { IntrinsicComponent } from '@ustudio-ui/types/component';
import { BreakpointsProps } from '../entity';

export interface CellBreakpointData {
  size?: number;
  offset?: [number?, number?];
}

export type CellBreakpoints = CellBreakpointData & BreakpointsProps<CellBreakpointData>;

export interface CellProps extends IntrinsicComponent, CellBreakpoints {
  area?: string;
}
