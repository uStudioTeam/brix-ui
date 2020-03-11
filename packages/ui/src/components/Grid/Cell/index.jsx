import React from 'react';
import PropTypes from 'prop-types';

import { common } from '../../../utils';

import { Styled } from '../styled';

const Cell = ({ children, direction = 'row', className, ...props }) => (
  <Styled.Cell {...props} dataDirection={direction} className={className || ''}>
    {children}
  </Styled.Cell>
);

Cell.displayName = 'Cell';

Cell.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  direction: common.direction,
  isReversed: PropTypes.bool,
  alignment: common.alignment,
  offset: PropTypes.exact(
    ['xs', 'md', 'lg', 'xl'].reduce(
      (obj, bp) => Object.assign(obj, { [bp]: PropTypes.exact({ before: PropTypes.number, after: PropTypes.number }) }),
      {}
    )
  ),
  ...['xs', 'md', 'lg', 'xl'].reduce((obj, bp) => Object.assign(obj, { [bp]: PropTypes.number }), {}),
  className: PropTypes.string,
};

Cell.defaultProps = {
  direction: 'row',
};

export default Cell;
