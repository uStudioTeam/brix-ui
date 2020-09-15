import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [isMatching, setMatching] = useState(false);

  const handleChange = (match: MediaQueryListEvent | MediaQueryList): void => {
    setMatching(match.matches);
  };

  useEffect(() => {
    const match = window.matchMedia(query);

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
  }, []);

  return isMatching;
};
