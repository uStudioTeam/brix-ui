import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../../utils/prop-types';

import { GridContext } from '../module';
import { reduceBreakpointsToObject } from '../module/reduce-breakpoints';

import { Styled } from '../styles';

const Cell = ({ children, styled, classNames, className = '', index, xs, md, lg, xl }) => {
  const gridData = useContext(GridContext);

  return (
    <Styled.Cell
      index={index}
      breakpoints={{ xs, md, lg, xl }}
      $styled={styled}
      $classNames={classNames}
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
