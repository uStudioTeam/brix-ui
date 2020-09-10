import type { ReactNode } from 'react';
import type { IntrinsicComponent, StylableComponent } from '@ustudio-ui/types/component';

import Styled from './disclosure.styles';

export interface DisclosureProps extends IntrinsicComponent<HTMLDivElement>, StylableComponent<typeof Styled> {
  isOpen?: boolean;
  summary?: ReactNode;
  icon?: ReactNode | ((props: Pick<DisclosureProps, 'isOpen' | 'isDisabled'>) => ReactNode);

  isDisabled?: boolean;

  onOpen?(): void;
  onChange?(isOpen: boolean): void;
  onClose?(): void;
}
