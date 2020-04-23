import { ClassNames, Intent } from '../../theme/theme';

interface Styled {
  Alert,
  Icon,
  Content
}

interface AlertProps extends ClassNames<Styled> {
  isOpen: boolean;
  onChange: () => void;

  intent?: Intent;
  verticalPosition: 'top' | 'bottom';
  horizontalPosition: 'left' | 'center' | 'right';

  children: string;
}

declare const Alert: {
  (props: AlertProps): JSX.Element;
};

export default Alert;
