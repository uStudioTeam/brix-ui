import React, { createContext, FC, useContext } from 'react';

import { useGrid } from './use-grid';

interface Value {
  areas: ReturnType<typeof useGrid>[0]['areas'];
  dispatcher: ReturnType<typeof useGrid>[1];
}

const GridContext = createContext<Value | undefined>(undefined);

export const GridProvider: FC<Value> = ({ children, ...props }) => {
  return <GridContext.Provider value={props}>{children}</GridContext.Provider>;
};

export const useGridContext = (): Value => {
  return useContext(GridContext) as Value;
};
