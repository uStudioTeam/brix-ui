import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ClassNames, Intent } from '../../theme/theme';

interface Styled {
  Button,
  LoadingSpinner
}

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    ClassNames<Styled> {
  intent?: Intent;
  appearance?: 'text' | 'contained' | 'outlined';
  
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  
  isDisabled?: boolean;
  isLoading?: boolean;
  
  children: ReactNode;
}

declare const Button: {
  (props: ButtonProps): JSX.Element;
};

export default Button;
