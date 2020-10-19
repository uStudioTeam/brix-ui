import type { HTMLAttributes, PropsWithChildren } from 'react';

import type { IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';
import type { Values } from '@brix-ui/utils/types';
import { TextAlign } from '@brix-ui/types/typography';

import type { FlexProps } from '../flex';

export interface DividerProps
  extends PropsWithChildren<IntrinsicComponent<HTMLAttributes<HTMLSpanElement>>>,
    Pick<FlexProps, 'direction' | 'isInline' | 'isReversed'>,
    StylableComponent {
  color?: string;

  thickness?: string;
  align?: Values<typeof TextAlign>;

  padding?: string;
  margin?: string;
  redLine?: string;
}
