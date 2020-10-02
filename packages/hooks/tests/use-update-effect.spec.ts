import { EffectCallback } from 'react';
import { renderHook } from '@testing-library/react-hooks';

import sut from '../src/use-update-effect';

const useUpdateEffect = (effect: EffectCallback, [tick]: [boolean]) => {
  sut(effect, [tick]);
};

describe('useUpdateEffect', () => {
  describe('when first mounting', () => {
    it('should not invoke an effect callback', () => {
      const effect = jest.fn();

      renderHook(() => useUpdateEffect(effect, [false]));

      expect(effect).not.toHaveBeenCalled();
    });
  });

  describe('when dependency updates', () => {
    it('should invoke an effect callback on every update', () => {
      const effect = jest.fn();

      const { rerender } = renderHook(
        (tick: Parameters<typeof useUpdateEffect>[1][0]) => useUpdateEffect(effect, [tick]),
        {
          initialProps: false,
        }
      );

      rerender(true);

      expect(effect).toHaveBeenCalledTimes(1);

      rerender(false);

      expect(effect).toHaveBeenCalledTimes(2);
    });
  });

  describe('when unmounting', () => {
    it('should not invoke an effect callback', () => {
      const effect = jest.fn();

      const { unmount } = renderHook(() => useUpdateEffect(effect, [false]));

      unmount();

      expect(effect).toHaveBeenCalledTimes(0);
    });
  });
});
