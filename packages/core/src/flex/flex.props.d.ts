import type { HTMLAttributes } from 'react';

import type { Alignable, IntrinsicComponent, StylableComponent, Taggable } from '@ustudio-ui/types/component';
import { Direction, FlexContainer } from '@ustudio-ui/types/css';
import type { FlexElement } from '@ustudio-ui/types/html';

import type { Values } from '@ustudio-ui/utils/types';
import type { BlockProps } from '../block';

export interface FlexProps
  extends IntrinsicComponent<HTMLAttributes<FlexElement>>,
    StylableComponent,
    Alignable,
    Taggable<Values<typeof FlexContainer>>,
    BlockProps {
  direction?: Values<typeof Direction>;

  isReversed?: boolean;
  hasWrap?: boolean;
}
