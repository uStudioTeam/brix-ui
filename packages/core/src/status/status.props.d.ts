import type { HTMLAttributes } from 'react';

import type { Intentable, IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';

export interface StatusProps
  extends IntrinsicComponent<HTMLAttributes<HTMLSpanElement>>,
    Intentable,
    StylableComponent {
  isStatic?: boolean;
  hasBorder?: boolean;
}
