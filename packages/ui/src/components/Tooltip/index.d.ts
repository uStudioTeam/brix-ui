import { ReactNode } from 'react';
import { ClassNames, Position } from '../../theme/theme';

interface Styled {
  Tooltip, Content
}

interface TooltipProps extends ClassNames<Styled> {
  value: ReactNode;
  position: Position;
  children: ReactNode;
}

declare const Tooltip: {
  (props: TooltipProps): JSX.Element;
};

export default Tooltip;
