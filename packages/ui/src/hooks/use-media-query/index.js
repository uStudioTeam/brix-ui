import { useEffect, useState } from 'react';

function useMediaQuery(query) {
  const [isMatching, setMatching] = useState(false);

  const handleChange = match => {
    setMatching(match.matches);
  };

  useEffect(() => {
    let match;

    if (window) {
      match = window.matchMedia(query);

      handleChange(match);
      /**
       * addEventListener is not yet fully supported for matchMedia in iOS Safari, so we are leaving addListener for compatibility
       * @see https://github.com/mdn/sprints/issues/858#issuecomment-515238645
       */
      if (match.addEventListener) {
        match.addEventListener('change', handleChange);
      } else {
        match.addListener(handleChange);
      }
  
      return () => {
        if (match.removeEventListener) {
          match.removeEventListener('change', handleChange);
        } else {
          match.removeListener(handleChange);
        }
      };
    }
  }, []);

  return isMatching;
}

export default useMediaQuery;
