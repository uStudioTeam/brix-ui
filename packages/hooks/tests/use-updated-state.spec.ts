import { renderHook, act } from '@testing-library/react-hooks';

import sut from '../src/use-updated-state';

describe('useUpdatedState', () => {
  describe('when not synced', () => {
    it('should just update internal state variable', () => {
      const { result } = renderHook(() => sut(''));

      expect(result.current[0]).toBe('');

      act(() => {
        result.current[1]('a');
      });

      expect(result.current[0]).toBe('a');
    });
  });

  describe('when synced', () => {
    it('should synchronize internal state to the external prop', () => {
      const { result, rerender } = renderHook((state) => sut(state), {
        initialProps: '',
      });

      rerender('a');

      expect(result.current[0]).toBe('a');
    });
  });
});
