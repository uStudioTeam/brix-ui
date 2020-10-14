import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, orUndefined } from '@brix-ui/utils/functions';
import { intentable, stylableComponent } from '@brix-ui/prop-types/common';
import { useDisabled } from '@brix-ui/contexts/disabled';

import { ButtonProps } from './button.props';
import Styled from './button.styles';

const Button = intrinsicComponent<ButtonProps, HTMLButtonElement>(function Button(
  { children, isDisabled: _isDisabled, isRounded, ...props },
  ref
) {
  const isDisabled = useDisabled(_isDisabled);

  return (
    <Styled.Button
      ref={ref}
      className="button"
      disabled={isDisabled}
      aria-disabled={orUndefined(isDisabled)}
      data-rounded={orUndefined(isRounded)}
      {...props}
    >
      {children}
    </Styled.Button>
  );
});

Button.propTypes = {
  appearance: PT.oneOf(['contained', 'outlined', 'text', 'faint']),
  isRounded: PT.bool,
  isDisabled: PT.bool,

  ...intentable,
  ...stylableComponent('height'),
};

export default Button;
