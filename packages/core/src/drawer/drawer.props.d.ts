import type { HTMLAttributes, PropsWithChildren } from 'react';

import { Position } from '@brix-ui/types/css';
import type { Values } from '@brix-ui/utils/types';
import type { Disclosable, IntrinsicComponent, StylableComponent, Unmountable } from '@brix-ui/types/component';

export interface DrawerProps
  extends Disclosable,
    Unmountable,
    PropsWithChildren<IntrinsicComponent<HTMLAttributes<HTMLDivElement>>>,
    StylableComponent<['borderRadius', 'overflow']> {
  position: Values<typeof Position>;
}
