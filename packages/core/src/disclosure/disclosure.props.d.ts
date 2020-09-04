import type { ReactNode } from 'react';
import type { IntrinsicComponent } from '@ustudio-ui/types/component';

export interface DisclosureProps extends IntrinsicComponent<HTMLDivElement> {
  isOpen?: boolean;
  summary?: ReactNode;
  icon?: ReactNode | ((props: Pick<DisclosureProps, 'isOpen' | 'isDisabled'>) => ReactNode);

  isDisabled?: boolean;

  onOpen?(): void;
  onChange?(isOpen: boolean): void;
  onClose?(): void;
}
