import React, { createContext, FC, useContext } from 'react';

import { Values } from '@ustudio-ui/utils/types';
import { Direction } from '@ustudio-ui/types/css';

type DirectionContextValue = Values<typeof Direction> | undefined;

const DirectionContext = createContext<DirectionContextValue>(undefined);

const DirectionProvider: FC<{ value: DirectionContextValue }> = ({ children, value }) => {
  return <DirectionContext.Provider value={value}>{children}</DirectionContext.Provider>;
};

export const useDirection = (): DirectionContextValue => useContext(DirectionContext);

export default DirectionProvider;
