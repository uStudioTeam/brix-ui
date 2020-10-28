import type { HTMLAttributes } from 'react';

import type { Disclosable, IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';

export interface OverlayProps
  extends Disclosable,
    IntrinsicComponent<HTMLAttributes<HTMLDivElement>>,
    StylableComponent<'opacity'> {}
