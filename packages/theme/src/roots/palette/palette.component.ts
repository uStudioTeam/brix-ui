import { createGlobalStyle, css } from 'styled-components';

import { objectKeys } from '@brix-ui/utils/functions';

const Palette = createGlobalStyle`
  :root {
    ${({ theme }) => {
      const { palette } = theme;

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
