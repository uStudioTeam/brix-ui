import React from 'react';

import { intrinsicComponent } from '@ustudio-ui/utils/functions';

import { ButtonProps } from './button.props';

import Styled from './button.styles';

const Button = intrinsicComponent<ButtonProps, HTMLButtonElement>(function Button(
  { children, intent, appearance, isDisabled, ...props },
  ref
) {
  return (
    <Styled.Button
      ref={ref}
      intent={intent}
      appearance={appearance}
      isDisabled={isDisabled}
      {...props}
    >
      {children}
    </Styled.Button>
  );
});

export default Button;
