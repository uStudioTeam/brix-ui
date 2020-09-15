import React, { FC } from 'react';
import { createGlobalStyle, css, FlattenSimpleInterpolation } from 'styled-components';

import { Theme } from '@ustudio-ui/theme';
import { objectKeys, setCssVariable } from '@ustudio-ui/utils/functions';
import { Variable } from '@ustudio-ui/types/css';

const PaletteGlobalStyles = createGlobalStyle<{
  variables: FlattenSimpleInterpolation;
}>`
  ${({ variables }) => css`
    :root {
      ${variables};
    }
  `};
`;

const Palette: FC<{ palette: Theme['palette'] }> = ({ palette }) => {
  return (
    <PaletteGlobalStyles
      variables={css`
        ${objectKeys(palette).reduce((variables, key) => {
          return css`
            ${variables};
            ${setCssVariable(Variable.Color, key, palette[key])}
          `;
        }, css``)};
      `}
    />
  );
};

export default Palette;
