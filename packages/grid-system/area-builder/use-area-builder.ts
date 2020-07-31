import { useReducer, useRef } from 'react';

import { areaBuilderReducer, AreaBuilderState } from './reducer';
import { AreaBuilderDispatcher } from './actions';

export const useAreaBuilder = (): [AreaBuilderState, AreaBuilderDispatcher] => {
  const [state, dispatch] = useReducer(areaBuilderReducer, {
    cells: {},
    areas: [],
    fractionsCount: 0
  });
  const { current: dispatcher } = useRef(new AreaBuilderDispatcher(dispatch));

  return [state, dispatcher];
};
