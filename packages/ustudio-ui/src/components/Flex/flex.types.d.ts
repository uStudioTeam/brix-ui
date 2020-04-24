import { HTMLAttributes, PropsWithChildren } from 'react';
import { Alignment, ClassNames, Indentation } from '../../theme/theme';
import { WrapperTag } from '../../shared/types';

interface Styled {
  Flex;
}

interface FlexProps extends ClassNames<Styled>, Partial<HTMLAttributes<HTMLElement>> {
  as?: WrapperTag;

  direction?: 'row' | 'column';
  isReversed?: boolean;
  isInline?: boolean;
  isWrap?: boolean;

  alignment?: Alignment;

  margin?: Indentation;
  padding?: Indentation;
}

declare const Flex: {
  (props: PropsWithChildren<FlexProps>): JSX.Element;
};

export default Flex;
