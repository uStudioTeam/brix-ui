import type { HTMLAttributes } from 'react';

import type { Delayable, IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';

export interface SpinnerProps extends IntrinsicComponent<HTMLAttributes<HTMLDivElement>>, StylableComponent, Delayable {
  blades?: number;
  bladeSize?:
    | string
    | {
        width?: string;
        height?: string;
      };
  speed?: number;
  color?: string;
  property?: string;
  range?: [rangeFrom?: number | string, rangeTo?: number | string];
  swirl?: boolean;
  spread?: number;
}
