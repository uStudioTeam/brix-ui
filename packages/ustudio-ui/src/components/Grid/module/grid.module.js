import { Children, cloneElement, createElement } from 'react';
import Cell from '../Cell';

import { reduceBreakpointsToObject } from './reduce-breakpoints';

const checkCellType = cell => {
  return typeof cell !== 'boolean' && typeof cell !== 'undefined' && cell !== null && cell !== '';
};

const filterChildren = children => {
  return Children.toArray(children).filter(child => !validateChild(child));
};

const countCellTotalSize = ({ size = 1, offset }) => size + (offset?.before || 0) + (offset?.after || 0);

export const validateChild = child => {
  const donor = createElement(Cell, { children: '' });
  
  return (child?.type?.name || child?.type?.target?.name) !== donor?.type?.name && checkCellType(child);
};

export const countCells = cells => {
  return Children.count(filterChildren(cells));
};

export const countDivisions = cells =>
  reduceBreakpointsToObject(breakpoint => ({
    [breakpoint]: Children.toArray(filterChildren(cells)).reduce(
      (cellsSizes, { props }) => cellsSizes + countCellTotalSize({ ...props[breakpoint] }),
      0
    ),
  }));

export const countCellsSizes = cells =>
  reduceBreakpointsToObject(breakpoint => ({
    [breakpoint]: Children.map(filterChildren(cells), ({ props }) => countCellTotalSize({ ...props[breakpoint] })),
  }));

export const countOffsets = cells => {
  return reduceBreakpointsToObject(breakpoint => ({
    [breakpoint]: Children.map(filterChildren(cells), ({ props }) => props[breakpoint]?.offset?.after || 0),
  }));
};

export const mapCells = cells => Children.map(filterChildren(cells), (cell, index) => cloneElement(cell, { index }));
