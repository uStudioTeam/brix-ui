import type { Alignable, IntrinsicComponent } from '@ustudio-ui/types/component';
import { Direction, FlexContainer } from '@ustudio-ui/types/css';
import type { FlexElement } from '@ustudio-ui/types/html';
import type { Values } from '@ustudio-ui/utils/types';

import { BlockProps } from '../block';

export interface FlexProps extends IntrinsicComponent<FlexElement>, Alignable, BlockProps {
  as?: Values<typeof FlexContainer>;

  direction?: Values<typeof Direction>;

  isReversed?: boolean;
  hasWrap?: boolean;
}
