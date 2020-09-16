import type { HTMLAttributes, ReactNode } from 'react';

import type { IntrinsicComponent, StylableComponent } from '@ustudio-ui/types/component';

import { Container, Icon, Summary, Details } from './disclosure.styles';

interface Styled {
  Container: typeof Container;
  Icon: typeof Icon;
  Summary: typeof Summary;
  Details: typeof Details;
}

export interface DisclosureProps extends IntrinsicComponent<HTMLAttributes<HTMLDivElement>>, StylableComponent<Styled> {
  isOpen?: boolean;
  summary?: ReactNode;
  icon?: ReactNode | ((props: Pick<DisclosureProps, 'isOpen' | 'isDisabled'>) => ReactNode);

  isDisabled?: boolean;

  onOpen?(): void;
  onChange?(isOpen: boolean): void;
  onClose?(): void;
}
