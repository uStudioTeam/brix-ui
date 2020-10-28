import React, { createContext, FC, useContext } from 'react';
import PT from 'prop-types';

type DisabledContextValue = boolean | undefined;

const DisabledContext = createContext<DisabledContextValue | undefined>(undefined);

const Disabled: FC<{ value: DisabledContextValue }> = (props) => {
  return <DisabledContext.Provider {...props} />;
};

Disabled.propTypes = {
  value: PT.bool,
};

export const useDisabled = (defaultValue?: boolean): DisabledContextValue => {
  const contextValue = useContext(DisabledContext);

  return defaultValue === undefined ? contextValue : defaultValue;
};

export default Disabled;
