import type { HTMLAttributes } from 'react';

import type { IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';

export interface OverlayProps extends IntrinsicComponent<HTMLAttributes<HTMLDivElement>>, StylableComponent {
  isActive: boolean;

  onClose?(): void;
}
