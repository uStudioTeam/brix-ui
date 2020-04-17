import { useEffect } from 'react';

const useDefaultValue = (onChange, { value, defaultValue }) => {
  useEffect(() => {
    if (defaultValue && value === undefined) {
      onChange(defaultValue);
    }
  }, []);
};

export default useDefaultValue;
