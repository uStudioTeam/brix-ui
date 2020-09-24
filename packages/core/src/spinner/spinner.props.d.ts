import type { HTMLAttributes } from 'react';

import type { Delayable, IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';

import { Spinner, Blade } from './spinner.styles';

interface Styled {
  Spinner: typeof Spinner;
  Blade: typeof Blade;
}

export interface SpinnerProps
  extends IntrinsicComponent<HTMLAttributes<HTMLDivElement>>,
    StylableComponent<Styled>,
    Delayable {
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
