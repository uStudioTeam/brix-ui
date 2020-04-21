import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { classNames, common, indentProps } from '../../../utils';

import { Styled } from '../styles';
import { gridUtils } from '../utils';
import { GridContext } from '../utils/context';
import { reduceBreakpointsToObject } from '../utils/reduce-breakpoints';

const Grid = ({
  children: cells,
  as = 'div',
  isContainer = false,
  margin,
  padding,
  styled,
  classNames,
  className = '',
  xs,
  md,
  lg,
  xl,
}) => {
  const { divisions, cellsSizes, cellsCount, offsets } = useMemo(
    () => ({
      divisions: gridUtils.countDivisions(cells),
      cellsSizes: gridUtils.countCellsSizes(cells),
      cellsCount: gridUtils.countCells(cells),
      offsets: gridUtils.countOffsets(cells),
    }),
    [cells]
  );

  return (
    <Styled.Grid
      as={as}
      divisions={divisions}
      isContainer={isContainer}
      cellsCount={cellsCount}
      breakpoints={{ xs, md, lg, xl }}
      margin={margin}
      padding={padding}
      $styled={styled}
      $classNames={classNames}
      className={className}
    >
      <GridContext.Provider
        value={{
          cellsSizes,
          gridBreakpoints: { xs, md, lg, xl },
          offsets,
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
    if (gridUtils.validateChild(cell)) {
      throw new Error(
        `Invalid prop "${propName}" passed to "${componentName}". Expected Cell component as children but received - "${cell
          .type?.name || cell?.type?.target?.name}".`
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
  as: common.wrapperTag,
  isContainer: PropTypes.bool,
  margin: indentProps(),
  padding: indentProps(),
  ...reduceBreakpointsToObject(breakpoint => ({
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
  as: 'div',
  isContainer: false,
};

export default Grid;
