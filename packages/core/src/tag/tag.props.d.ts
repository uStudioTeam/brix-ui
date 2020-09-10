import { ReactElement } from 'react';
import type { IntrinsicComponent, StylableComponent } from '@ustudio-ui/types/component';

import Styled from './tag.styles';

export interface TagProps extends IntrinsicComponent<HTMLDivElement>, StylableComponent<typeof Styled> {
  backgroundColor?: string;
  color?: string;

  closeIcon?: ReactElement;
  onClose?(): void;
}
