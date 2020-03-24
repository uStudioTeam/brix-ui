import { useEffect, useState } from 'react';

function useMediaQuery(query) {
  const [isMatching, setMatching] = useState(false);

  useEffect(() => {
    let match;
    
    if (window) {
      match = window.matchMedia(`(${query})`);
      match.addEventListener('change', () => setMatching(match.matches));
    }

    return () => {
      match.removeEventListener('change', () => setMatching(match.matches));
    };
  }, []);
  
  return isMatching;
}

export default useMediaQuery;
