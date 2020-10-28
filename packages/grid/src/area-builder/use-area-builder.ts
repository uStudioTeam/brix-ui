import { useMemo, useReducer } from 'react';

import { areaBuilderReducer, AreaBuilderState } from './reducer';
import { AreaBuilderDispatcher } from './actions';

export const useAreaBuilder = (): [AreaBuilderState, AreaBuilderDispatcher] => {
  const [state, dispatch] = useReducer(areaBuilderReducer, {
    cells: {},
    areas: [],
    fractionsCount: 0,
  });
  const dispatcher = useMemo(() => new AreaBuilderDispatcher(dispatch), []);

  return [state, dispatcher];
};
