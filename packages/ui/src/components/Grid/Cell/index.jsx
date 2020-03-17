import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { gridUtils } from '../utils';
import { GridContext } from '../utils/context';

import { Styled } from '../styles';

const Cell = ({ children, className = '', index, xs, md, lg, xl }) => {
  const gridData = useContext(GridContext);

  return (
    <Styled.Cell className={className} index={index} breakpoints={{ xs, md, lg, xl }} {...gridData}>
      {children}
    </Styled.Cell>
  );
};

Cell.displayName = 'Cell';

Cell.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  ...gridUtils.reduceBreakpointsToObject(breakpoint => ({
    [breakpoint]: PropTypes.exact({
      size: PropTypes.number,
      offset: PropTypes.exact({
        before: PropTypes.number,
        after: PropTypes.number,
      }),
    }),
  })),
  className: PropTypes.string,
};

export default Cell;
