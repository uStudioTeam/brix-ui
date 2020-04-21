import { PropsWithChildren } from 'react';
import { Alignment, ClassNames, Indentation } from '../../theme/theme';
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

  margin?: Indenttation;
  padding?: Indentation;
}

declare const Flex: {
  (props: PropsWithChildren<FlexProps>): JSX.Element;
};

export default Flex;
