import { Breakpoint } from '@brix-ui/types/css';

import type { Theme } from './theme';

export const defaultTheme: Pick<Theme, 'breakpoints' | 'miscellaneous' | 'typography'> = {
  breakpoints: {
    [Breakpoint.Xs]: 0,
    [Breakpoint.Sm]: 576,
    [Breakpoint.Md]: 768,
    [Breakpoint.Lg]: 992,
    [Breakpoint.Xl]: 1200,
  },
  miscellaneous: {
    color: 'var(--c-base-strong)',
    backgroundColor: 'var(--c-base-weak)',

    transition: {
      short: 200,
      long: 600,
    },

    inputHeightLarge: '28px',
    inputHeightSmall: '16px',

    inputBorderRadius: '2px',

    inputBorderColor: 'var(--c-faint-strong-down)',
    inputBorderColorFocus: 'var(--c-accent-strong)',
    inputBorderColorInvalid: 'var(--c-critical-strong)',
    inputBorderColorInvalidFocus: 'var(--c-critical-weak-up)',
    inputBorderColorValid: 'var(--c-success-strong)',
    inputBorderColorValidFocus: 'var(--c-success-weak-up)',
    inputBorderColorDisabled: 'var(--c-faint-weak-up)',

    inputBackgroundColor: 'var(--c-base-weak)',
    inputBackgroundColorDisabled: 'var(--c-faint-weak-down)',
    inputBackgroundColorChecked: 'var(--c-accent-strong)',
    inputBackgroundColorCheckedFocus: 'var(--c-accent-strong-down)',
    inputBackgroundColorCheckedDisabled: 'var(--c-faint-weak-up)',

    inputColor: 'var(--c-base-strong)',
    inputColorDisabled: 'var(--c-faint-strong-down)',

    inputPlaceholderColor: 'var(--c-faint-strong-down)',
    inputPlaceholderColorDisabled: 'var(--c-faint-weak-up)',
  },
  typography: {
    fontSize: '16px',
    fontFamily: 'var(--f-body)',
    lineHeight: 1.375,
  },
};
