import type { Intentable } from '@brix-ui/types/component';

import type { FlexProps } from '../flex';

export interface AlertProps extends FlexProps, Intentable {
  showStatus?: boolean;

  onClose?(): void;
}
