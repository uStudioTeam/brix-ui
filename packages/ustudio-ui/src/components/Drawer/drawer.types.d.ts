import { ReactNode } from 'react';
import { ClassNames, Position } from '../../theme/theme';

interface Styled {
  Drawer;
  Overlay;
}

interface DrawerProps extends ClassNames<Styled> {
  isOpen: boolean;
  onChange: (isOpen?: boolean) => void;

  position?: Position;

  showOverlay?: boolean;

  children: ReactNode | ReactNode[];
}

declare const Drawer: {
  (props: DrawerProps): JSX.Element;
};

export default Drawer;
