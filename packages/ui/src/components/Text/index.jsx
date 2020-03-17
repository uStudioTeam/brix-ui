import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { classNames, common } from '../../utils';

import { Styled } from './styles';
import { textUtils } from './utils';

const Text = forwardRef(function Text(
  {
    children = '',
    variant = 'body',
    align = 'left',
    appearance = 'regular',
    className = '',
    classNames,
    ...htmlAttributes
  },
  ref
) {
  return (
    <Styled.Text
      as={textUtils.renderElement({ variant, appearance })}
      ref={ref}
      variant={variant}
      align={align}
      appearance={appearance}
      className={`${classNames?.Text || ''} ${className}`}
      {...htmlAttributes}
    >
      {children}
    </Styled.Text>
  );
});

Text.displayName = 'Text';

Text.propTypes = {
  children: PropTypes.node.isRequired,
  variant: common.text,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  appearance: PropTypes.oneOf(['regular', 'italic', 'underlined', 'bold']),
  ...classNames(Object.keys(Styled)),
};

Text.defaultProps = {
  children: '',
  variant: 'body',
  align: 'left',
  appearance: 'regular',
};

export default Text;
