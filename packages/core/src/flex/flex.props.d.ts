import type { HTMLAttributes, PropsWithChildren } from 'react';

import type { Alignable, IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';
import { Direction } from '@brix-ui/types/css';
import type { FlexElement } from '@brix-ui/types/html';

import type { Values } from '@brix-ui/utils/types';
import type { BlockProps } from '../block';

export interface FlexProps
  extends PropsWithChildren<IntrinsicComponent<HTMLAttributes<FlexElement>>>,
    StylableComponent,
    Alignable,
    BlockProps {
  direction?: Values<typeof Direction>;

  isReversed?: boolean;
  hasWrap?: boolean;
}
