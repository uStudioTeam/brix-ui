import React, { createContext, FC, useContext } from 'react';

import { useAreaBuilder } from './use-area-builder';

interface Value {
  areas: ReturnType<typeof useAreaBuilder>[0]['areas'];
  dispatcher: ReturnType<typeof useAreaBuilder>[1];
}

const AreaBuilderContext = createContext<Value | undefined>(undefined);

export const AreaBuilderProvider: FC<Value> = ({ children, ...props }) => {
  return <AreaBuilderContext.Provider value={props}>{children}</AreaBuilderContext.Provider>;
};

export const useAreaBuilderContext = (): Value => {
  return useContext(AreaBuilderContext) as Value;
};
