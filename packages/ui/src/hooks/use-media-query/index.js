import { useEffect, useState } from 'react';

function useMediaQuery(query) {
  const [isMatching, setMatching] = useState(false);

  const handleChange = match => {
    setMatching(match.matches);
  };

  useEffect(() => {
    let match;

    if (window) {
      match = window.matchMedia(`(${query})`);

      handleChange(match);
      match.addEventListener('change', handleChange);
    }

    return () => {
      match.removeEventListener('change', handleChange);
    };
  }, []);

  return isMatching;
}

export default useMediaQuery;
