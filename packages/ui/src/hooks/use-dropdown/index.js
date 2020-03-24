import { useCallback, useEffect, useRef, useState } from 'react';

import { timeout } from '../../utils';

function parseDimensionValue(value) {
  if (value === null) {
    return 'auto';
  }

  if (value !== 0) {
    return `${value}px`;
  }

  return value;
}

const useDropdown = (control, dimension) => {
  const [preservedDimension, setPreservedDimension] = useState(0);
  const [usedDimension, setUsedDimension] = useState(0);

  const dropdownRef = useRef(null);

  const toggleDropdown = useCallback(
    state => {
      return {
        enter: () => {
          usedDimension === 0 && setUsedDimension(preservedDimension);
          toggleDropdown('entered');
        },
        entered: () => {
          usedDimension !== null && usedDimension > 0 && timeout(300, () => setUsedDimension(null));
        },
        exit: () => {
          usedDimension === null && setUsedDimension(preservedDimension);
          toggleDropdown('exited');
        },
        exited: () => {
          usedDimension !== null && usedDimension > 0 && timeout(preservedDimension / 4, () => setUsedDimension(0));
        },
      }[state]();
    },
    [usedDimension, preservedDimension]
  );

  useEffect(() => {
    control ? toggleDropdown('enter') : toggleDropdown('exit');
  }, [control, usedDimension, preservedDimension, toggleDropdown]);

  useEffect(() => {
    if (usedDimension === 0) {
      setPreservedDimension(dropdownRef.current?.getBoundingClientRect()[dimension] || 0);
    }
  }, [usedDimension]);

  return { ref: dropdownRef, [dimension]: parseDimensionValue(usedDimension) };
};

export default useDropdown;
