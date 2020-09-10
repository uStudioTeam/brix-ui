import { ReactElement } from 'react';
import type { IntrinsicComponent, StylableComponent } from '@ustudio-ui/types/component';

import Styled from './tag.styles';

export interface TagProps extends IntrinsicComponent<HTMLDivElement>, StylableComponent<typeof Styled> {
  color?: string;
  backgroundColor?: string;

  closeIcon?: ReactElement;
  onClose?(): void;
}
