import React, { FC } from 'react';
import { createGlobalStyle, css, FlattenSimpleInterpolation } from 'styled-components';

import { Variable } from '@ustudio-ui/types/css';

import { primaryPalette, secondaryPalette, auxillaryPalette, gradientPalette, ColorsMap } from './entity';
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

const Palette: FC = () => {
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
