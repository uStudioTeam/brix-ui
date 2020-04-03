import { Children, cloneElement, createElement } from 'react';
import Cell from '../Cell';

import { reduceBreakpointsToObject } from './reduce-breakpoints';

const _checkCellType = cell => {
  return typeof cell !== 'boolean' && typeof cell !== 'undefined' && cell !== null && cell !== '';
};

const validateChild = child => {
  const donor = createElement(Cell, { children: '' });

  return (child?.type?.name || child?.type?.target?.name) !== donor?.type?.name && _checkCellType(child);
};

const _filterChildren = children => {
  return Children.toArray(children).filter(child => !validateChild(child));
};

const _countCellTotalSize = ({ size = 1, offset }) => size + (offset?.before || 0) + (offset?.after || 0);

const countCells = cells => {
  return Children.count(_filterChildren(cells));
};

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

const mapCells = cells => Children.map(_filterChildren(cells), (cell, index) => cloneElement(cell, { index }));

export const gridUtils = {
  validateChild,
  countDivisions,
  countCellsSizes,
  mapCells,
  countCells,
};
