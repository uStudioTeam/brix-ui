import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { classNames, common } from '../../utils';

import { Styled } from './styles';
import { textUtils } from './utils';

const Text = forwardRef(function Text(
  {
    children = '',
    variant = 'body',
    appearance = 'regular',
    align = 'inherit',
    color = 'inherit',
    className = '',
    classNames,
    styled,
  },
  ref
) {
  return (
    <Styled.Text
      as={textUtils.renderElement({ variant, appearance })}
      ref={ref}
      variant={variant}
      appearance={appearance}
      align={align}
      dataColor={color}
      classNames={classNames}
      className={className}
      styled={styled}
    >
      {children}
    </Styled.Text>
  );
});

Text.displayName = 'Text';

Text.propTypes = {
  children: PropTypes.node.isRequired,
  variant: common.text,
  appearance: PropTypes.oneOf(['regular', 'italic', 'underlined', 'bold']),
  align: PropTypes.oneOf(['left', 'center', 'right', 'inherit']),
  color: PropTypes.string,
  ...classNames(Object.keys(Styled)),
};

Text.defaultProps = {
  variant: 'body',
  appearance: 'regular',
  align: 'inherit',
  color: 'inherit',
};

export default Text;
