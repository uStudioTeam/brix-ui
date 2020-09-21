import type { HTMLAttributes, ReactElement } from 'react';

import type { IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';

import { Container, Content, CloseButton, CloseIcon } from './tag.styles';

interface Styled {
  Container: typeof Container;
  Content: typeof Content;
  CloseButton: typeof CloseButton;
  CloseIcon: typeof CloseIcon;
}

export interface TagProps extends IntrinsicComponent<HTMLAttributes<HTMLDivElement>>, StylableComponent<Styled> {
  color?: string;
  backgroundColor?: string;

  closeIcon?: ReactElement;
  onClose?(): void;
}
