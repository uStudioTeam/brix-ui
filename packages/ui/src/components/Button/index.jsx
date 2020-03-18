import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';

import { classNames, common } from '../../utils';

import { Styled } from './styles';

const Button = forwardRef(function Button(
  {
    intent = 'primary',
    appearance = 'contained',
    iconBefore,
    iconAfter,
    isDisabled = false,
    isLoading = false,
    children,
    classNames,
    className = '',
    ...htmlAttributes
  },
  ref
) {
  return (
    <Styled.Button
      {...{
        ref,
        intent,
        appearance,
        iconBefore,
        iconAfter,
        disabled: isLoading || isDisabled,
        isLoading,
        className,
        classNames,
        children,
        ...htmlAttributes,
      }}
    >
      {iconBefore}

      {isLoading && (
        <Styled.LoadingSpinner className={classNames}>
          <Spinner appearance={{ color: 'var(--c-neutral)', size: 16 }} />
        </Styled.LoadingSpinner>
      )}

      {children}

      {iconAfter}
    </Styled.Button>
  );
});

Button.displayName = 'Button';

Button.propTypes = {
  intent: common.intent,
  appearance: PropTypes.oneOf(['text', 'contained', 'outlined']),
  iconBefore: PropTypes.node,
  iconAfter: PropTypes.node,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  ...classNames(Object.keys(Styled)),
};

Button.defaultProps = {
  intent: 'primary',
  appearance: 'contained',
  isLoading: false,
  isDisabled: false,
};

export default Button;
