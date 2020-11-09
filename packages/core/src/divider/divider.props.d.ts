import type { HTMLAttributes, ReactElement } from 'react';

import type { Indent, IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';
import type { Values } from '@brix-ui/utils/types';
import { Align } from '@brix-ui/types/css';

import type { FlexProps } from '../flex';

export interface DividerProps
  extends IntrinsicComponent<HTMLAttributes<HTMLSpanElement>>,
    Pick<FlexProps, 'direction' | 'isInline' | 'isReversed'>,
    StylableComponent {
  children?: ReactElement;

  color?: string;

  thickness?: string;
  align?: Extract<Values<typeof Align>, 'start' | 'center' | 'end'>;

  padding?: Indent;
  margin?: Indent;
  redLine?: string;
}
