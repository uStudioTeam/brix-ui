import { createGlobalStyle, css } from 'styled-components';

import { Breakpoint } from '@brix-ui/types/css';
import { objectValues } from '@brix-ui/utils/functions';

const Breakpoints = createGlobalStyle`
  :root {
    ${({ theme }) => {
      const { breakpoints } = theme;

      return objectValues(Breakpoint).reduce((styles, breakpoint) => {
        return css`
          ${styles};
          
          --bp-${breakpoint}: ${breakpoints[breakpoint]}px;
        `;
      }, css``);
    }};
  }
`;

export default Breakpoints;
