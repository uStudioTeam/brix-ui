import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { common } from '../../../utils';

import { Styled } from '../styles';
import { gridUtils } from '../utils';
import { GridContext } from '../utils/context';

const Grid = ({ children: cells, isContainer = false, className, xs, md, lg, xl }) => {
  console.log(cells);
  const { divisions, cellsSizes, cellsCount } = useMemo(
    () => ({
      divisions: gridUtils.countDivisions(cells),
      cellsSizes: gridUtils.countCellsSizes(cells),
      cellsCount: gridUtils.countCells(cells),
    }),
    [cells]
  );

  return (
    <Styled.Grid
      className={className || ''}
      divisions={divisions}
      isContainer={isContainer}
      cellsCount={cellsCount}
      breakpoints={{ xs, md, lg, xl }}
    >
      <GridContext.Provider
        value={{
          cellsSizes,
          gridBreakpoints: { xs, md, lg, xl },
        }}
      >
        {gridUtils.mapCells(cells)}
      </GridContext.Provider>
    </Styled.Grid>
  );
};

Grid.displayName = 'Grid';

const cellsValidator = (props, propName, componentName) => {
  const validateCell = cell => {
    if (cell.type.name !== 'Cell') {
      throw {};
    }
  };

  try {
    props[propName].forEach(cell => {
      if (Array.isArray(cell)) {
        cell.forEach(validateCell);
      } else {
        validateCell(cell);
      }
    });
  } catch {
    return new Error(
      `Invalid prop \`${propName}\` passed to \`${componentName}\`. Expected Cell component as children.`
    );
  }
};

Grid.propTypes = {
  children: cellsValidator,
  isContainer: PropTypes.bool,
  ...gridUtils.reduceBreakpointsToObject(breakpoint => ({
    [breakpoint]: PropTypes.exact({
      template: PropTypes.string,
      maxWidth: PropTypes.number,
      direction: common.direction,
      gap: PropTypes.number,
      alignment: common.alignment,
    }),
  })),
  className: PropTypes.string,
};

Grid.defaultProps = {
  isContainer: false,
};

export default Grid;
