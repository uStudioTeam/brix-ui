import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../../utils/prop-types';

import { reduceBreakpointsToObject } from '../utils/reduce-breakpoints';
import { GridContext } from '../utils/context';

import { Styled } from '../styles';

const Cell = ({ children, classNames, className = '', index, xs, md, lg, xl }) => {
  const gridData = useContext(GridContext);

  return (
    <Styled.Cell
      index={index}
      breakpoints={{ xs, md, lg, xl }}
      classNames={classNames}
      className={className}
      {...gridData}
    >
      {children}
    </Styled.Cell>
  );
};

Cell.displayName = 'Cell';

Cell.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  ...reduceBreakpointsToObject(breakpoint => ({
    [breakpoint]: PropTypes.exact({
      size: PropTypes.number,
      offset: PropTypes.exact({
        before: PropTypes.number,
        after: PropTypes.number,
      }),
    }),
  })),
  ...classNames(['Cell']),
};

export default Cell;
