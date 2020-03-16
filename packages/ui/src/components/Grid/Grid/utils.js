import { Children, cloneElement } from 'react';

const _countCellTotalSize = ({ size = 1, offset }) => size + (offset?.before ?? 0) + (offset?.after ?? 0);

const countCells = cells => {
  return Children.count(cells);
};

const countDivisions = cells =>
  ['xs', 'md', 'lg', 'xl'].reduce(
    (divisions, breakpoint) =>
      Object.assign(divisions, {
        [breakpoint]: Children.toArray(cells).reduce(
          (cellsSizes, { props }) => cellsSizes + _countCellTotalSize({ ...props[breakpoint] }),
          0
        ),
      }),
    {}
  );

const countCellsSizes = cells =>
  ['xs', 'md', 'lg', 'xl'].reduce(
    (templates, breakpoint) =>
      Object.assign(templates, {
        [breakpoint]: Children.map(cells, ({ props }) => _countCellTotalSize({ ...props[breakpoint] })),
      }),
    {}
  );

const mapCells = cells => Children.map(cells, (cell, index) => cloneElement(cell, { index }));

export const gridUtils = { countDivisions, countCellsSizes, mapCells, countCells };
