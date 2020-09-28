import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '@brix-ui/utils/functions';
import { Intent } from '@brix-ui/types/component';
import { stylableComponent } from '@brix-ui/prop-types/common';
import { useDisabled } from '@brix-ui/contexts/disabled';

import { ButtonProps } from './button.props';
import Styled from './button.styles';

const Button = intrinsicComponent<ButtonProps, HTMLButtonElement>(function Button(
  { children, isDisabled: _isDisabled, ...props },
  ref
) {
  const isDisabled = useDisabled(_isDisabled);

  return (
    <Styled.Button ref={ref} disabled={isDisabled} aria-disabled={isDisabled} {...props}>
      {children}
    </Styled.Button>
  );
});

Button.propTypes = {
  intent: PT.oneOf(objectValues(Intent)),
  appearance: PT.oneOf(['contained', 'outlined', 'text', 'faint']),
  isRounded: PT.bool,
  isDisabled: PT.bool,

  ...stylableComponent(),
};

export default Button;
