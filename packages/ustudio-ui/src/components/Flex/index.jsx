import React from 'react';
import PropTypes from 'prop-types';

import { classNames, common } from '../../utils';

import { Styled } from './styles';

const Flex = ({ children, as = 'div', direction = 'row', isReversed, isInline, alignment, classNames, className = '' }) => (
  <Styled.Flex
    as={as}
    dataDirection={direction}
    isReversed={isReversed}
    isInline={isInline}
    alignment={alignment}
    classNames={classNames}
    className={className}
  >
    {children}
  </Styled.Flex>
);

Flex.displayName = 'Flex';

Flex.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  as: common.wrapperTag,
  direction: common.direction,
  isReversed: PropTypes.bool,
  isInline: PropTypes.bool,
  alignment: common.alignment,
  ...classNames(Object.keys(Styled)),
};

Flex.defaultProps = {
  as: 'div',
  direction: 'row',
};

export default Flex;
