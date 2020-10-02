import { Theme } from '@brix-ui/theme';
import { createGlobalStyle } from 'styled-components';

const Miscelaneous = createGlobalStyle<Pick<Theme, 'transition'>>`
  :root {
    --transition-short: ${({ transition }) => transition.short}ms;
    --transition-long: ${({ transition }) => transition.long}ms;
  }
`;

export default Miscelaneous;
