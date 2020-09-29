import type { HTMLAttributes, PropsWithChildren } from 'react';

import type { BlockProps } from '@brix-ui/core/block';
import type { IntrinsicComponent, StylableComponent, BreakpointsProps } from '@brix-ui/types/component';
import type { Values } from '@brix-ui/utils/types';
import { Direction } from '@brix-ui/types/css';

export interface GridBreakpointProps extends Pick<BlockProps, 'gap'> {
  direction?: Values<typeof Direction>;
  template?: ((fractionsCount: number) => string) | string;
  maxWidth?: ((currentBreakpoint: number) => string) | string;
}

export interface GridProps
  extends BreakpointsProps<GridBreakpointProps>,
    PropsWithChildren<IntrinsicComponent<HTMLAttributes<HTMLDivElement>>>,
    StylableComponent,
    Omit<BlockProps, 'isInline' | 'gap'> {}
