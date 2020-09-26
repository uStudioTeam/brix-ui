import type { HTMLAttributes, PropsWithChildren } from 'react';

import { Position } from '@brix-ui/types/css';
import type { Values } from '@brix-ui/utils/types';
import type { Disclosable, IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';

export interface DrawerProps
  extends Disclosable,
    PropsWithChildren<IntrinsicComponent<HTMLAttributes<HTMLDivElement>>>,
    StylableComponent {
  isOpen: boolean;
  position: Values<typeof Position>;

  unmountOnExit?: boolean;
}
