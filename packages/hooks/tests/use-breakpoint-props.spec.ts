import { renderHook } from '@testing-library/react-hooks';

import { matchMedia } from '../../../mocks/match-media';

import sut from '../src/use-breakpoint-props';

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
      (sut(props, {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5,
      }) as unknown) as { color: string; currentBreakpoint: number }
  );
};

describe('useBreakpointProps', () => {
  beforeEach(() => {
    matchMedia();
  });

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

      expect(currentBreakpoint).toBe(1);
    });
  });

  describe('when one of breakpoints matches', () => {
    let hook: ReturnType<typeof render>;

    beforeEach(() => {
      matchMedia(3);

      hook = render();
    });

    it('should return props from matched breakpoint', () => {
      expect(hook.result.current.color).toBe(props.md.color);
    });

    it('should match `currentBreakpoint` to the value of a matched breakpoint', () => {
      expect(hook.result.current.currentBreakpoint).toBe(3);
    });
  });
});
