import type { HTMLAttributes } from 'react';

import type { IntrinsicComponent, StylableComponent } from '@ustudio-ui/types/component';
import type { Values } from '@ustudio-ui/utils/types';

import { Align } from '@ustudio-ui/types/css';
import { Badge, BadgeContainer } from './badge.styles';

interface Styled {
  Badge: typeof Badge;
  BadgeContainer: typeof BadgeContainer;
}

type BadgePosition = Values<Pick<typeof Align, 'start' | 'end' | 'center'>>;

export interface BadgeProps extends IntrinsicComponent<HTMLAttributes<HTMLDivElement>>, StylableComponent<Styled> {
  color?: string;
  backgroundColor?: string;

  horizontalPosition?: BadgePosition;
  verticalPosition?: BadgePosition;
  horizontalOffset?: string;
  verticalOffset?: string;

  shouldDisplay?: boolean;
  value?: string | number;
}
