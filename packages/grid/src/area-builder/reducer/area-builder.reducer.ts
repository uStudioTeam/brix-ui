import type { Reducer } from 'react';

import type { AreaBuilderAction } from '../actions';

import type { AreaBuilderState } from './area-builder-state';

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

export const areaBuilderReducer: Reducer<AreaBuilderState, AreaBuilderAction> = (state, action) => {
  switch (action.type) {
    case 'mount_cell': {
      const { payload } = action;

      const cells = {
        ...state.cells,
        [payload.id]: payload,
      };

      const areas = Object.keys(cells).reduce((areas, key) => {
        const { size = 1, offset } = cells[key];
        const [offsetBefore, offsetAfter] = offset || [];

        return [...areas, ...[...repeat('.', offsetBefore), ...formatSize(key, size), ...repeat('.', offsetAfter)]];
      }, [] as string[]);

      return {
        ...state,
        areas,
        cells,
        fractionsCount: areas.length,
      };
    }
    default: {
      return state;
    }
  }
};
