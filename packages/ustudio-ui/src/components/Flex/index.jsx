import React from 'react';
import PropTypes from 'prop-types';

import { classNames, common, indentProps } from '../../utils';

import { Styled } from './styles';

const Flex = ({
  children,
  as = 'div',
  direction = 'row',
  margin,
  padding,
  isReversed,
  isInline,
  isWrap,
  alignment,
  styled,
  classNames,
  className = '',
}) => (
  <Styled.Flex
    as={as}
    $direction={direction}
    isReversed={isReversed}
    isInline={isInline}
    isWrap={isWrap}
    $margin={margin}
    $padding={padding}
    alignment={alignment}
    $classNames={classNames}
    className={className}
    $styled={styled}
  >
    {children}
  </Styled.Flex>
);

Flex.displayName = 'Flex';

Flex.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  as: common.wrapperTag,
  direction: common.direction,
  margin: indentProps(),
  padding: indentProps(),
  isReversed: PropTypes.bool,
  isInline: PropTypes.bool,
  isWrap: PropTypes.bool,
  alignment: common.alignment,
  ...classNames(Object.keys(Styled)),
};

Flex.defaultProps = {
  as: 'div',
  direction: 'row',
};

export default Flex;
