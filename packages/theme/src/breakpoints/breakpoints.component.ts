import { createGlobalStyle, css } from 'styled-components';

import { Breakpoint } from '@ustudio-ui/types/css';
import { objectValues, setCssVariable } from '@ustudio-ui/utils/functions';

import type { BreakpointsMap } from './entity';

const Breakpoints = createGlobalStyle<BreakpointsMap>`
  ${(props) => {
    return objectValues(Breakpoint).reduce((styles, breakpoint) => {
      return css`
        ${styles};
        ${setCssVariable('bp', breakpoint, props[breakpoint])};
      `;
    }, css``);
  }};
`;

export default Breakpoints;
