import type { HTMLAttributes, PropsWithChildren } from 'react';

import type { Alignable, IntrinsicComponent, StylableComponent, Taggable } from '@brix-ui/types/component';
import { Direction, FlexContainer } from '@brix-ui/types/css';
import type { FlexElement } from '@brix-ui/types/html';

import type { Values } from '@brix-ui/utils/types';
import type { BlockProps } from '../block';

export interface FlexProps
  extends PropsWithChildren<IntrinsicComponent<HTMLAttributes<FlexElement>>>,
    StylableComponent,
    Alignable,
    Taggable<Values<typeof FlexContainer>>,
    BlockProps {
  direction?: Values<typeof Direction>;

  isReversed?: boolean;
  hasWrap?: boolean;
}
