import { useMemo } from 'react';
import { css, FlattenSimpleInterpolation } from 'styled-components';

import { Variable } from '@ustudio-ui/types/css';
import { objectKeys, setCssVariable } from '@ustudio-ui/utils/functions';
import type { Values } from '@ustudio-ui/utils/types';
import { Color } from '@ustudio-ui/types/palette';

import { useTheme } from '../use-theme';

import type { Theme } from '../theme';
import type { ColorsMap } from './entity';

const pick = <K extends keyof Theme['palette']>(palette: Theme['palette'], colors: K[]): Array<Theme['palette'][K]> => {
  // `color` may not appear in `colors` apparently
  // @ts-expect-error
  return objectKeys(palette).filter((color) => colors.includes(color));
};

export const useVariables = <F extends ColorsMap>({
  from,
  prefix,
}: {
  from: F;
  prefix: Extract<Values<typeof Variable>, 'c' | 'g'>;
  getValue?(props: { palette: Theme['palette']; variable: keyof F }): string;
}): FlattenSimpleInterpolation => {
  const { palette } = useTheme();

  return useMemo<FlattenSimpleInterpolation>(() => {
    return objectKeys(from).reduce((variables, variable) => {
      return css`
        ${variables};
        ${setCssVariable(prefix, variable as string, palette[variable as Values<typeof Color>])};
      `;
    }, css``);
  }, pick(palette, objectKeys(from) as (keyof ColorsMap)[]));
};
