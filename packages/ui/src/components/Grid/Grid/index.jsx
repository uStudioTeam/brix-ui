import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import Cell from '../Cell';

import { common } from '../../../utils';

import { Styled } from '../styles';
import { gridUtils } from './utils';

export const GridContext = createContext([]);

const Grid = ({ children: cells, isContainer = false, className, ...breakpoints }) => {
  const { divisions, cellsSizes, cellsCount } = useMemo(
    () => ({ divisions: gridUtils.countDivisions(cells), cellsSizes: gridUtils.countCellsSizes(cells), cellsCount: gridUtils.countCells(cells) }),
    [cells]
  );

  return (
    <Styled.Grid className={className || ''} divisions={divisions} isContainer={isContainer} cellsCount={cellsCount} {...breakpoints}>
      <GridContext.Provider
        value={{
          divisions,
          cellsSizes,
          gridBreakpoints: breakpoints,
        }}
      >
        {gridUtils.mapCells(cells)}
      </GridContext.Provider>
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
      type: PropTypes.oneOf([Cell]),
    }),

    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([Cell]),
      })
    ),
  ]).isRequired,
  isContainer: PropTypes.bool,
  ...['xs', 'md', 'lg', 'xl'].reduce(
    (breakpoints, breakpoint) =>
      Object.assign(breakpoints, {
        [breakpoint]: PropTypes.exact({
          template: PropTypes.string,
          maxWidth: PropTypes.number,
          direction: common.direction,
          gap: PropTypes.number,
          alignment: common.alignment,
        }),
      }),
    {}
  ),
  className: PropTypes.string,
};

Grid.defaultProps = {
  isContainer: false,
};

export default Grid;
