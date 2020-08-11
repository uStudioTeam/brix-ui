import { useMemo } from 'react';

import type { With } from '@ustudio-ui/utils/types';
import { useTheme } from '@ustudio-ui/theme';
import { spread } from '@ustudio-ui/utils/functions';

import { useMediaQuery } from './use-media-query';

export const useBreakpointProps = <
  R extends With<Record<string, unknown>, { currentBreakpoint: number }>,
  A extends Omit<R, 'currentBreakpoint'>,
  B extends R
>({
  sm,
  md,
  lg,
  xl,
  ...rest
}: A): R => {
  const {
    breakpoints: { xs: bpXs, sm: bpSm, md: bpMd, lg: bpLg, xl: bpXl },
  } = useTheme();

  const isSm = useMediaQuery(`screen and (min-width: ${bpSm}px)`);
  const isMd = useMediaQuery(`screen and (min-width: ${bpMd}px)`);
  const isLg = useMediaQuery(`screen and (min-width: ${bpLg}px)`);
  const isXl = useMediaQuery(`screen and (min-width: ${bpXl}px)`);

  return useMemo(() => {
    if (isXl) {
      return spread({ currentBreakpoint: bpXl }, rest as B, ...([sm, md, lg, xl] as B[])) as R;
    }

    if (isLg) {
      return spread({ currentBreakpoint: bpLg }, rest as B, ...([sm, md, lg] as B[])) as R;
    }

    if (isMd) {
      return spread({ currentBreakpoint: bpMd }, rest as B, ...([sm, md] as B[])) as R;
    }

    if (isSm) {
      return spread({ currentBreakpoint: bpSm }, rest as B, sm as B) as R;
    }

    return spread({ currentBreakpoint: bpXs }, rest as B) as B;
  }, [rest, isSm, sm, isMd, md, isLg, lg, isXl, xl]);
};
