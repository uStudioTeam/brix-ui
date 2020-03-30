import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { classNames, common } from '../../../utils';

import { Styled } from '../styles';
import { gridUtils } from '../utils';
import { GridContext } from '../utils/context';

const Grid = ({ children: cells, isContainer = false, classNames, className = '', xs, md, lg, xl }) => {
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
      divisions={divisions}
      isContainer={isContainer}
      cellsCount={cellsCount}
      breakpoints={{ xs, md, lg, xl }}
      classNames={classNames}
      className={className}
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
  const cells = props[propName];

  const validateCell = cell => {
    if (cell?.type && cell.type?.name !== 'Cell') {
      throw new Error(
        `Invalid prop "${propName}" passed to "${componentName}". Expected Cell component as children but received - "${cell.type?.name}".`
      );
    }
  };

  try {
    if (Array.isArray(cells)) {
      cells.forEach(cell => {
        if (Array.isArray(cell)) {
          cell.forEach(validateCell);
        } else {
          validateCell(cell);
        }
      });
    } else {
      validateCell(cells);
    }
  } catch (error) {
    return error;
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
  ...classNames(['Grid']),
};

Grid.defaultProps = {
  isContainer: false,
};

export default Grid;
