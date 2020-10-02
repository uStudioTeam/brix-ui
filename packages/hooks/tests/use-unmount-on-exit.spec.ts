import { act, renderHook } from '@testing-library/react-hooks';

import useUnmountOnExit from '../src/use-unmount-on-exit';

const render = (handle: boolean, unmountOnExit = true) => {
  return renderHook((props?: [Parameters<typeof useUnmountOnExit>[0], Parameters<typeof useUnmountOnExit>[1]?]) =>
    useUnmountOnExit(props?.[0] ?? handle, props?.[1] ?? unmountOnExit, 200)
  );
};

jest.useFakeTimers();

describe('useUnmountOnExit', () => {
  describe('when handle is `true`', () => {
    it('should set mounting immediately and internalHandle after 0ms delay', async () => {
      const { result, rerender, waitFor } = render(false);

      await waitFor(() => {
        expect(result.current[0]).toBe(false);
        expect(result.current[1]).toBe(false);
      });

      rerender([true]);

      act(() => {
        jest.advanceTimersByTime(0);
      });

      await waitFor(() => {
        expect(result.current[0]).toBe(true);
        expect(result.current[1]).toBe(true);
      });
    });
  });

  describe('when handle is `false`', () => {
    it('should set internalHandle immediately and mounting after specified delay', async () => {
      const { result, waitFor, rerender } = render(true);

      await waitFor(() => {
        expect(result.current[0]).toBe(true);
        expect(result.current[1]).toBe(true);
      });

      rerender([false]);

      await waitFor(() => {
        expect(result.current[0]).toBe(false);
        expect(result.current[1]).toBe(true);
      });

      act(() => {
        jest.advanceTimersByTime(200);
      });

      await waitFor(() => {
        expect(result.current[0]).toBe(false);
        expect(result.current[1]).toBe(false);
      });
    });
  });

  describe('when `unmountOnExit` parameter is `false`', () => {
    it('should always allow mounting', async () => {
      const { result, waitFor, rerender } = render(false, false);

      await waitFor(() => {
        expect(result.current[0]).toBe(false);
        expect(result.current[1]).toBe(true);
      });

      rerender([true]);

      await waitFor(() => {
        expect(result.current[0]).toBe(true);
        expect(result.current[1]).toBe(true);
      });

      rerender([false]);

      await waitFor(() => {
        expect(result.current[0]).toBe(false);
        expect(result.current[1]).toBe(true);
      });
    });
  });
});
