import type { Reducer } from 'react';

import type { GridAction } from '../actions';

import type { GridState } from './grid-state';

const repeat = (string: string, times: number | undefined): string[] => {
  if (!times) {
    return [];
  }

  return Array.from(Array(times).keys()).map(() => string);
};

const formatSize = (area: string, size: number | undefined): string[] => {
  if (!size) {
    return [];
  }

  if (size === 1) {
    return [area];
  }

  return [`${area}s`, ...repeat(area, size - 2), `${area}e`];
};

export const gridReducer: Reducer<GridState, GridAction> = (state, action) => {
  switch (action.type) {
    case 'mount_cell': {
      const { payload } = action;

      const areas = Object.keys(state.cells).reduce((areas, key) => {
        const { size = 1, offset } = state.cells[key];
        const [offsetBefore, offsetAfter] = offset || [];

        return [...areas, ...[...repeat('.', offsetBefore), ...formatSize(key, size), ...repeat('.', offsetAfter)]];
      }, [] as string[]);

      return {
        ...state,
        areas,
        cells: {
          ...state.cells,
          [payload.id]: payload,
        },
        fractionsCount: areas.length,
      };
    }
    default: {
      return state;
    }
  }
};
