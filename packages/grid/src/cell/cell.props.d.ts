import type { FlexProps } from '@brix-ui/core/flex';
import type { BreakpointsProps } from '@brix-ui/types/component';

export interface CellBreakpointProps {
  size?: number;
  offset?: [number?, number?] | number;
}

export interface CellProps extends BreakpointsProps<CellBreakpointProps>, FlexProps {
  area?: string;
}
