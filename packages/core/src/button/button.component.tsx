import React from 'react';

import { intrinsicComponent } from '@ustudio-ui/utils/functions';

import { ButtonProps } from './button.props';
import Styled from './button.styles';

const Button = intrinsicComponent<ButtonProps, HTMLButtonElement>(function Button({ children, ...props }, ref) {
  return (
    <Styled.Button ref={ref} {...props}>
      {children}
    </Styled.Button>
  );
});

export default Button;
