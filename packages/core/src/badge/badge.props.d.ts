import type { HTMLAttributes, PropsWithChildren } from 'react';

import type { IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';
import type { Values } from '@brix-ui/utils/types';

import { Align } from '@brix-ui/types/css';

type BadgePosition = Values<Pick<typeof Align, 'start' | 'end' | 'center'>>;

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
