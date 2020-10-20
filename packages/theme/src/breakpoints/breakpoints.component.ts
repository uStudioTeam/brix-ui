import { createGlobalStyle, css } from 'styled-components';

import { Breakpoint } from '@brix-ui/types/css';
import { objectValues } from '@brix-ui/utils/functions';

import type { BreakpointsMap } from './entity';

const Breakpoints = createGlobalStyle<BreakpointsMap>`
  :root {
    ${(props) => {
      return objectValues(Breakpoint).reduce((styles, breakpoint) => {
        return css`
          ${styles};
          
          --bp-${breakpoint}: ${props[breakpoint]}px;
        `;
      }, css``);
    }};
  }
`;

export default Breakpoints;
