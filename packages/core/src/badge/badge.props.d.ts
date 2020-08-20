import type { IntrinsicComponent } from '@ustudio-ui/types/component';
import type { Values } from '@ustudio-ui/utils/types';
import { Align } from '@ustudio-ui/types/css';

type BadgePosition = Values<Pick<typeof Align, 'start' | 'end' | 'center'>>;

export interface BadgeProps extends IntrinsicComponent {
  color?: string;
  backgroundColor?: string;

  horizontalPosition?: BadgePosition;
  verticalPosition?: BadgePosition;
  horizontalOffset?: string;
  verticalOffset?: string;

  shouldDisplay?: boolean;
  value?: string | number;
}