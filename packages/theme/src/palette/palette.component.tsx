import React, { FC } from 'react';
import { createGlobalStyle, css, FlattenSimpleInterpolation } from 'styled-components';

import { Variable } from '@ustudio-ui/types/css';
import { ColorSpace, ColorTupleNumber } from '@ustudio-ui/types/palette';

import type { Theme } from '../theme';

import {
  primaryPalette,
  secondaryPalette,
  secondaryPaletteShifts,
  auxillaryPalette,
  gradientPalette,
  ColorsMap,
  ColorTransformer,
} from './entity';
import { useVariables } from './use-variables';

const PaletteGlobalStyles = createGlobalStyle<{
  variables: FlattenSimpleInterpolation;
}>`
  ${({ variables }) => css`
    :root {
      ${variables};
    }
  `};
`;

const Palette: FC<{ override?: Partial<Theme['palette']> }> = ({ override }) => {
  const gradientVariables = useVariables({
    from: gradientPalette as ColorsMap,
    prefix: Variable.Gradient,
  });

  const auxillaryVariables = useVariables({
    from: auxillaryPalette as ColorsMap,
    prefix: Variable.Color,
  });

  const primaryVariables = useVariables({
    from: primaryPalette as ColorsMap,
    prefix: Variable.Color,
  });

  const secondaryVariables = useVariables({
    from: secondaryPalette as ColorsMap,
    prefix: Variable.Color,
    getValue: ({ palette, variable }) => {
      if (override?.[variable]) {
        return ColorTransformer.toHsl(
          ColorTransformer.applyShift(
            ColorTransformer.toTuple(
              override?.[variable.replace(/(-u|-d)$/, '') as keyof typeof override] ||
                palette[variable.replace(/(-u|-d)$/, '') as keyof typeof palette],
              ColorSpace.HSL
            ) as [number, number, number]
          )(...(secondaryPaletteShifts[variable as keyof typeof secondaryPaletteShifts] as ColorTupleNumber))
        );
      }

      return palette[variable];
    },
  });

  return (
    <PaletteGlobalStyles
      variables={css`
        ${primaryVariables};

        ${secondaryVariables};

        ${auxillaryVariables};

        ${gradientVariables};
      `}
    />
  );
};

export default Palette;
