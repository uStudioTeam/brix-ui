import { useMemo } from 'react';

import { useTheme } from '@ustudio-ui/theme';
import { spread } from '@ustudio-ui/utils/functions';

import { useMediaQuery } from './use-media-query';

export const useBreakpointProps = <R extends Record<string, unknown>, B extends R>({
  sm,
  md,
  lg,
  xl,
  ...rest
}: B): R => {
  const { sm: bpSm, md: bpMd, lg: bpLg, xl: bpXl } = useTheme();

  const isSm = useMediaQuery(`screen and (min-width: ${bpSm}px)`);
  const isMd = useMediaQuery(`screen and (min-width: ${bpMd}px)`);
  const isLg = useMediaQuery(`screen and (min-width: ${bpLg}px)`);
  const isXl = useMediaQuery(`screen and (min-width: ${bpXl}px)`);

  return useMemo(() => {
    if (isXl) {
      return spread(rest, ...([sm, md, lg, xl] as B[])) as R;
    }

    if (isLg) {
      return spread(rest, ...([sm, md, lg] as B[])) as R;
    }

    if (isMd) {
      return spread(rest, ...([sm, md] as B[])) as R;
    }

    if (isSm) {
      return spread(rest, sm as B) as R;
    }

    return (rest as unknown) as R;
  }, [rest, isSm, sm, isMd, md, isLg, lg, isXl, xl]);
};
