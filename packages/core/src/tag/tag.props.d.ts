import { ReactElement } from 'react';

import type { IntrinsicComponent } from '@ustudio-ui/types/component';

export interface TagProps extends IntrinsicComponent {
  backgroundColor?: string;
  color?: string;

  onClose?: () => void;
  closeIcon?: ({ onClose }) => ReactElement;
}
