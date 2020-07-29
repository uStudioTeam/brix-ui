import { Alignable, IntrinsicComponent } from '@ustudio-ui/types/component';
import { Direction, FlexContainer } from '@ustudio-ui/types/css';
import { Values } from '@ustudio-ui/utils/types';

export interface FlexProps extends IntrinsicComponent, Alignable {
  as?: Values<typeof FlexContainer>;

  direction?: Values<typeof Direction>;

  isReversed?: boolean;
  isInline?: boolean;
  hasWrap?: boolean;
}
