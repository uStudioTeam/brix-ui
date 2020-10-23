import { createGlobalStyle, css } from 'styled-components';

import { createCustomProperties } from '@brix-ui/utils/functions';

const Miscellaneous = createGlobalStyle`
  :root {
    ${({ theme }) => {
      const { transition, ...rest } = theme.miscellaneous;

      return css`
        --transition-short: ${transition.short}ms;
        --transition-long: ${transition.long}ms;

        ${createCustomProperties({}, rest as Record<keyof typeof rest, string | undefined>)}
      `;
    }}
  }
    
  body {
    ${({ theme }) => {
      const { color, backgroundColor } = theme.miscellaneous;

      return css`
        color: ${color};
        background-color: ${backgroundColor};
      `;
    }}
  }
`;

export default Miscellaneous;
