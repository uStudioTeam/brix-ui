import React, { createContext, FC, useContext } from 'react';
import PT from 'prop-types';

import { Values } from '@ustudio-ui/utils/types';
import { Direction } from '@ustudio-ui/types/css';
import { objectValues } from '@ustudio-ui/utils/functions';

type DirectionContextValue = Values<typeof Direction> | undefined;

const DirectionContext = createContext<DirectionContextValue>(undefined);

const DirectionProvider: FC<{ value: DirectionContextValue }> = ({ children, value }) => {
  return <DirectionContext.Provider value={value}>{children}</DirectionContext.Provider>;
};

export const useDirection = (): DirectionContextValue => useContext(DirectionContext);

DirectionProvider.propTypes = {
  value: PT.oneOf(objectValues(Direction)),
};

export default DirectionProvider;
