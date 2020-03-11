import React from 'react';
import PropTypes from 'prop-types';

import { classNames, common } from '../../utils';

import { Styled } from './styled';

const Flex = ({ children, classNames, className, direction = 'row', ...props }) => (
  <Styled.Flex className={`${classNames?.Flex || ''} ${className || ''}`} dataDirection={direction} {...props}>
    {children}
  </Styled.Flex>
);

Flex.displayName = 'Flex';

Flex.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  direction: common.direction,
  isReversed: PropTypes.bool,
  isInline: PropTypes.bool,
  alignment: common.alignment,
  ...classNames(Object.keys(Styled)),
};

Flex.defaultProps = {
  direction: 'row'
};

export default Flex;
