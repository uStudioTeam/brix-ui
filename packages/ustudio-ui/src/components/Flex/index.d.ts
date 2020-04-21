import { PropsWithChildren } from 'react';
import { Alignment, ClassNames } from '../../theme/theme';
import { WrapperTag } from '../../shared/types';

interface Styled {
  Flex;
}

interface FlexProps extends ClassNames<Styled> {
  as?: WrapperTag;

  direction?: 'row' | 'column';
  isReversed?: boolean;
  isInline?: boolean;

  alignment?: Alignment;
}

declare const Flex: {
  (props: PropsWithChildren<FlexProps>): JSX.Element;
};

export default Flex;
