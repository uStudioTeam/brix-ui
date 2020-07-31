import { useMemo } from 'react';

import { useTheme } from '@ustudio-ui/theme';
import type { Values } from '@ustudio-ui/utils/types';

import type { BreakpointsMap } from './entity';
import { useMediaQuery } from './use-media-query';

const spread = <
  _O extends Record<string, unknown> | undefined,
  O extends Exclude<_O, undefined>,
  R extends Record<keyof O, Values<O>>
>(
  ...objects: _O[]
): R => {
  return objects.reduce((spreadObject, object) => {
    return Object.assign(spreadObject, object || {});
  }, {} as R);
};

export const useBreakpointProps = <
  R extends Record<string, unknown>,
  B extends BreakpointsMap<R> & R = BreakpointsMap<R> & R
>({
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
