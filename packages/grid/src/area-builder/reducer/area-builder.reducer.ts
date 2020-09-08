import type { Reducer } from 'react';

import { objectKeys } from '@ustudio-ui/utils/functions';

import type { AreaBuilderAction } from '../actions';
import type { AreaBuilderState } from './area-builder-state';

const repeat = (string: string, times: number | undefined): string[] => {
  if (!times) {
    return [];
  }

  return [...new Array(times).keys()].map(() => string);
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
  const { payload } = action;

  const cells = {
    ...state.cells,
    [payload.id]: payload,
  };

  const areas = objectKeys(cells).reduce((nextAreas, key) => {
    const { size = 1, offset } = cells[key];
    const [offsetBefore, offsetAfter] = offset || [];

    return [
      ...nextAreas,
      ...[...repeat('.', offsetBefore), ...formatSize(key as string, size), ...repeat('.', offsetAfter)],
    ];
  }, [] as string[]);

  return {
    ...state,
    areas,
    cells,
    fractionsCount: areas.length,
  };
};
