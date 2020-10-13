import { createGlobalStyle } from 'styled-components';

import type { Theme } from '@brix-ui/theme';

const Miscelaneous = createGlobalStyle<Pick<Theme, 'transition'>>`
  :root {
    /* Transitions */
    --transition-short: ${({ transition }) => transition.short}ms;
    --transition-long: ${({ transition }) => transition.long}ms;
    
    /* Inputs */
    --input-height-large: 28px;
    --input-height-small: 16px;
    
    --input-border-radius: 2px;
    
    --input-border-color: var(--c-faint-strong-down);
    --input-border-color-focus: var(--c-accent-strong);
    --input-border-color-invalid: var(--c-critical-strong);
    --input-border-color-invalid-focus: var(--c-critical-weak-up);
    --input-border-color-disabled: var(--c-faint-weak-up);
    
    --input-background-color: var(--c-base-weak);
    --input-background-color-disabled: var(--c-faint-weak-down);
    --input-background-color-checked: var(--c-accent-strong);
    --input-background-color-checked-focus: var(--c-accent-strong-down);
    --input-background-color-checked-disabled: var(--c-faint-weak-up);
    
    --input-color: var(--c-base-strong);
    --input-color-disabled: var(--c-faint-strong-down);
    
    --input-placeholder-color: var(--c-faint-strong-down);
    --input-placeholder-color-disabled: var(--c-faint-weak-up);
  }
`;

export default Miscelaneous;
