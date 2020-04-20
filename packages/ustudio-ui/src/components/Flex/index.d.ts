import { PropsWithChildren } from 'react';
import { Alignment, ClassNames, Indentation } from '../../theme/theme';

interface Styled {
  Flex;
}

interface FlexProps extends ClassNames<Styled> {
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
