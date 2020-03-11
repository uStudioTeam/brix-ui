import React, { Children, cloneElement, useMemo } from 'react';
import PropTypes from 'prop-types';

import Cell from '../Cell';

import { common } from '../../../utils';

import { Styled } from '../styled';

function mapCells({ cells, cellsCount, gridDirection, divideBy }) {
  return Children.map(cells, (cell, cellIndex) =>
    cloneElement(cell, { cellsCount, cellIndex, gridDirection, divideBy })
  );
}

const Grid = ({ children: cells, direction = 'column', divideBy = 3, className, ...props }) => {
  const cellsCount = useMemo(() => {
    return Children.count(cells);
  }, [cells]);

  return (
    <Styled.Grid
      {...props}
      dataDirection={direction}
      className={className || ''}
      divideBy={divideBy}
      cellsCount={cellsCount}
    >
      {mapCells({ cells, cellsCount, gridDirection: direction, divideBy })}
    </Styled.Grid>
  );
};

Grid.displayName = 'Grid';

Grid.propTypes = {
  /**
   * https://github.com/facebook/react/issues/2979#issuecomment-218833260
  */
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([Cell])
    }),

    PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.oneOf([Cell])
    }))
  ]).isRequired,
  direction: common.direction,
  gap: PropTypes.number,
  alignment: common.alignment,
  divideBy: PropTypes.number,
  className: PropTypes.string,
};

Grid.defaultProps = {
  direction: 'column',
  divideBy: 1,
};

export default Grid;
