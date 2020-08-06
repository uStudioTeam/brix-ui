import { useReducer, useRef } from 'react';

import { gridReducer, GridState } from './reducer';
import { GridDispatcher } from './actions';

export const useGrid = (): [GridState, GridDispatcher] => {
  const [state, dispatch] = useReducer(gridReducer, {
    cells: {},
    areas: [],
    fractionsCount: 0,
  });
  const { current: dispatcher } = useRef(new GridDispatcher(dispatch));

  return [state, dispatcher];
};
