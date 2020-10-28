import type { HTMLAttributes, PropsWithChildren } from 'react';

import type { IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';

export type BadgePosition = 'start' | 'center' | 'end';

export interface BadgeProps
  extends PropsWithChildren<IntrinsicComponent<HTMLAttributes<HTMLDivElement>>>,
    StylableComponent {
  color?: string;
  backgroundColor?: string;

  horizontalPosition?: BadgePosition;
  verticalPosition?: BadgePosition;
  horizontalOffset?: string;
  verticalOffset?: string;

  shouldDisplay?: boolean;
  value?: string | number;
}
