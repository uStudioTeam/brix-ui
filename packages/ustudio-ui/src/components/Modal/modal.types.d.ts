import { ReactElement } from 'react';
import { ClassNames } from '../../theme/theme';

interface Styled {
  Modal;
  Icon;
  Overlay;
  Header;
  Title;
  Content;
}

interface ModalProps extends ClassNames<Styled> {
  title?: string | ReactElement;
  footer?: ReactElement;
  isOpen: boolean;
  onChange: (isOpen: boolean) => void;
  children: ReactElement | ReactElement[];
}

declare const Modal: {
  (props: ModalProps): JSX.Element;
};

export default Modal;
