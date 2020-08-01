import { useReducer, useRef } from 'react';

import { gridReducer, GridState } from './reducer';
import { AreaBuilderDispatcher } from './actions';

export const useGrid = (): [GridState, AreaBuilderDispatcher] => {
  const [state, dispatch] = useReducer(gridReducer, {
    cells: {},
    areas: [],
    fractionsCount: 0
  });
  const { current: dispatcher } = useRef(new AreaBuilderDispatcher(dispatch));

  return [state, dispatcher];
};
