import { useMemo } from 'react';

import type { With } from '@brix-ui/utils/types';
import { spread } from '@brix-ui/utils/functions';

import useMediaQuery from './use-media-query';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type WithCurrentBreakpoint<T = {}> = With<T, { currentBreakpoint: number }>;

/**
 * Merges props from all the breakpoints up to the currently matching one.
 * Expects `xs` to be the default
 */
export default function useBreakpointProps<T extends object | undefined>(
  props: T & Record<Exclude<Breakpoint, 'xs'>, T | undefined>,
  breakpoints: Record<Breakpoint, number>
): WithCurrentBreakpoint<T> {
  const { sm, md, lg, xl, ...xs } = props;
  const { xs: bpXs, sm: bpSm, md: bpMd, lg: bpLg, xl: bpXl } = breakpoints;

  const isSm = useMediaQuery(`screen and (min-width: ${bpSm}px)`);
  const isMd = useMediaQuery(`screen and (min-width: ${bpMd}px)`);
  const isLg = useMediaQuery(`screen and (min-width: ${bpLg}px)`);
  const isXl = useMediaQuery(`screen and (min-width: ${bpXl}px)`);

  return useMemo<WithCurrentBreakpoint<T>>(() => {
    if (isXl) {
      return spread({ currentBreakpoint: bpXl }, xs as T, ...([sm, md, lg, xl] as T[]));
    }

    if (isLg) {
      return spread({ currentBreakpoint: bpLg }, xs as T, ...([sm, md, lg] as T[]));
    }

    if (isMd) {
      return spread({ currentBreakpoint: bpMd }, xs as T, ...([sm, md] as T[]));
    }

    if (isSm) {
      return spread({ currentBreakpoint: bpSm }, xs as T, sm as T);
    }

    return spread({ currentBreakpoint: bpXs }, xs);
  }, [xs, isSm, sm, isMd, md, isLg, lg, isXl, xl]);
}
