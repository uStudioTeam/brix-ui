import { createGlobalStyle, css } from 'styled-components';

import type { Theme } from '@brix-ui/theme';
import { objectKeys } from '@brix-ui/utils/functions';

const Palette = createGlobalStyle<{
  palette: Theme['palette'];
}>`
  :root {
    ${({ palette }) => {
      return objectKeys(palette).reduce((variables, key) => {
        return css`
            ${variables};

            --c-${key}: ${palette[key]};
          `;
      }, css``);
    }}
  }
`;

export default Palette;
