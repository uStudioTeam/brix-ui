import { Children, cloneElement } from 'react';
import { Mixin } from '../../../theme';

const _countCellTotalSize = ({ size = 1, offset }) => size + (offset?.before || 0) + (offset?.after || 0);

const _filterChildren = children => {
  return Children.toArray(children).filter(child => child?.type.name === 'Cell');
};

const countCells = cells => {
  return Children.count(_filterChildren(cells));
};

const reduceBreakpointsToObject = breakpointCallback =>
  Object.keys(Mixin.Screen).reduce(
    (destinationObject, breakpoint) => Object.assign(destinationObject, breakpointCallback(breakpoint)),
    {}
  );

const countDivisions = cells =>
  reduceBreakpointsToObject(breakpoint => ({
    [breakpoint]: Children.toArray(_filterChildren(cells)).reduce(
      (cellsSizes, { props }) => cellsSizes + _countCellTotalSize({ ...props[breakpoint] }),
      0
    ),
  }));

const countCellsSizes = cells =>
  reduceBreakpointsToObject(breakpoint => ({
    [breakpoint]: Children.map(_filterChildren(cells), ({ props }) => _countCellTotalSize({ ...props[breakpoint] })),
  }));

const mapCells = cells => Children.map(cells, (cell, index) => cloneElement(cell, { index }));

export const gridUtils = { countDivisions, countCellsSizes, mapCells, countCells, reduceBreakpointsToObject };
