import React, { FC } from 'react';
import { createGlobalStyle, css, FlattenSimpleInterpolation } from 'styled-components';

import { Theme } from '@brix-ui/theme';
import { objectKeys, setCssVariable } from '@brix-ui/utils/functions';
import { Variable } from '@brix-ui/types/css';

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
