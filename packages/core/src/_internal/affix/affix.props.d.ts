import type { HTMLAttributes, PropsWithChildren } from 'react';

import type { IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';

export interface AffixProps
  extends PropsWithChildren<IntrinsicComponent<HTMLAttributes<HTMLElement>>>,
    StylableComponent {}
