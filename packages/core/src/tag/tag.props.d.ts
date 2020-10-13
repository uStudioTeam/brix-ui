import type { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

import type { IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';

export interface TagProps
  extends PropsWithChildren<IntrinsicComponent<HTMLAttributes<HTMLDivElement>>>,
    StylableComponent {
  color?: string;
  backgroundColor?: string;

  closeIcon?: ReactElement;
  onClose?(): void;
}
