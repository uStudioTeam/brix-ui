import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';

import ThemeProvider from '@brix-ui/theme';
import { defaultTheme } from '@brix-ui/theme/entity';
import { matchMedia } from '@brix-ui/utils/tests';

import useBreakpointProps from '../src/use-breakpoint-props';

const props = {
  color: 'red',
  sm: {
    color: 'orange',
  },
  md: {
    color: 'yellow',
  },
  lg: {
    color: 'green',
  },
  xl: {
    color: 'blue',
  },
};

const render = () => {
  return renderHook(
    () =>
      (useBreakpointProps(props, {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5,
      }) as unknown) as { color: string; currentBreakpoint: number },
    {
      wrapper: ({ children }) => {
        return <ThemeProvider>{children}</ThemeProvider>;
      },
    }
  );
};

describe('useBreakpointProps', () => {
  matchMedia();

  describe('when no breakpoints match', () => {
    let result: ReturnType<typeof render>['result'];

    beforeEach(() => {
      result = render().result;
    });

    it('should return default props only', () => {
      const { color } = result.current;

      expect(color).toBe(props.color);
    });

    it('should match `currentBreakpoint` to the value of `xs`', () => {
      const { currentBreakpoint } = result.current;

      expect(currentBreakpoint).toBe(defaultTheme.breakpoints.xs);
    });
  });

  describe('when one of breakpoints matches', () => {
    let hook: ReturnType<typeof render>;

    beforeEach(() => {
      hook = render();

      matchMedia(defaultTheme.breakpoints.md);

      act(hook.rerender);
    });

    it('should return props from that breakpoint', () => {
      hook.waitFor(() => expect(hook.result.current.color).toBe(props.md.color));
    });

    it('should match `currentBreakpoint` to the value of a matched breakpoint', () => {
      hook.waitFor(() => expect(hook.result.current.currentBreakpoint).toBe(defaultTheme.breakpoints.md));
    });
  });
});
