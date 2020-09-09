import { ReactElement } from 'react';

import type { IntrinsicComponent } from '@ustudio-ui/types/component';

export interface TagProps extends IntrinsicComponent<HTMLDivElement> {
  backgroundColor?: string;
  color?: string;

  closeIcon?: ReactElement;
  onClose?(): void;
}
