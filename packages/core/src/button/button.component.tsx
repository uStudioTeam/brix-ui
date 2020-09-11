import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '@ustudio-ui/utils/functions';
import { Intent } from '@ustudio-ui/types/component';
import { stylableComponent } from '@ustudio-ui/prop-types/common';

import { ButtonProps } from './button.props';
import Styled from './button.styles';

const Button = intrinsicComponent<ButtonProps, HTMLButtonElement>(function Button(
  { children, isDisabled, borderRadius, ...props },
  ref
) {
  return (
    <Styled.Button ref={ref} disabled={isDisabled} aria-disabled={isDisabled} $borderRadius={borderRadius} {...props}>
      {children}
    </Styled.Button>
  );
});

Button.propTypes = {
  intent: PT.oneOf(objectValues(Intent)),
  appearance: PT.oneOf(['contained', 'outlined', 'text', 'faint']),
  borderRadius: PT.oneOf(['small', 'large']),
  isDisabled: PT.bool,

  ...stylableComponent(),
};

export default Button;
