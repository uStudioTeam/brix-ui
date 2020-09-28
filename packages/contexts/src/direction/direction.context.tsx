import React, { createContext, FC, useContext } from 'react';
import PT from 'prop-types';

import { Values } from '@brix-ui/utils/types';
import { Direction as DirectionType } from '@brix-ui/types/css';
import { objectValues } from '@brix-ui/utils/functions';

type DirectionContextValue = Values<typeof DirectionType> | undefined;

const DirectionContext = createContext<DirectionContextValue>(undefined);

const Direction: FC<{ value: DirectionContextValue }> = (props) => {
  return <DirectionContext.Provider {...props} />;
};

Direction.propTypes = {
  value: PT.oneOf(objectValues(DirectionType)),
};

export const useDirection = (): DirectionContextValue => useContext(DirectionContext);

export default Direction;
