import type { HTMLAttributes, PropsWithChildren } from 'react';

import type { IntrinsicComponent, StylableComponent, BreakpointsProps } from '@brix-ui/types/component';

export interface CellBreakpointProps {
  size?: number;
  offset?: [number?, number?];
}

export interface CellProps
  extends BreakpointsProps<CellBreakpointProps>,
    PropsWithChildren<IntrinsicComponent<HTMLAttributes<HTMLDivElement>>>,
    StylableComponent {
  area?: string;
}
