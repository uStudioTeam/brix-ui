import { renderHook, act } from '@testing-library/react-hooks';

import sut from '../src/use-delay';

const render = (delay: number | undefined) => {
  return renderHook(() => sut(delay));
};

jest.useFakeTimers();

describe('useDelay', () => {
  describe('when delay is not specified', () => {
    it('should render immediately', async () => {
      const { result, waitFor } = render(undefined);

      jest.advanceTimersByTime(0);

      await waitFor(() => expect(result.current).toBe(true));
    });
  });

  describe('when delay is specified', () => {
    it('should render only after the specified time will have passed', async () => {
      const { result, waitFor } = render(54);

      await waitFor(() => expect(result.current).toBe(false));

      act(() => {
        jest.advanceTimersByTime(54);
      });

      await waitFor(() => expect(result.current).toBe(true));
    });
  });
});
