import type { HTMLAttributes } from 'react';

import type { Intentable, IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';

export interface StatusProps
  extends IntrinsicComponent<HTMLAttributes<HTMLSpanElement>>,
    Intentable,
    StylableComponent<['size', 'borderWidth', 'borderColor']> {
  isStatic?: boolean;
  hasBorder?: boolean;
}
