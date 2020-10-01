import { renderHook, act } from '@testing-library/react-hooks';

import type { Disclosable } from '@brix-ui/types/component';

import useDisclose from '../src/use-disclose';

const render = (props = {} as Disclosable) => {
  return renderHook((initialProps) => useDisclose({ ...props, ...initialProps }), {
    initialProps: { isOpen: false, ...props },
  });
};

describe('useDisclose', () => {
  describe('isOpen', () => {
    it('should update open state when `isOpen` prop changes', () => {
      const { result, rerender } = render();

      rerender({
        isOpen: true,
      });

      expect(result.current[0]).toBe(true);

      rerender({
        isOpen: false,
      });

      expect(result.current[0]).toBe(false);
    });

    it('should update open state when `toggle` is called', () => {
      const { result } = render();

      act(() => result.current[1](true));

      expect(result.current[0]).toBe(true);

      act(() => result.current[1](false));

      expect(result.current[0]).toBe(false);
    });
  });

  describe('onOpen', () => {
    it('should call `onOpen` only when `isOpen` is true', () => {
      const onOpen = jest.fn();

      const { rerender } = render({
        onOpen,
      });

      rerender({
        isOpen: true,
      });

      expect(onOpen).toHaveBeenCalledTimes(1);

      rerender({
        isOpen: false,
      });

      expect(onOpen).toHaveBeenCalledTimes(1);
    });
  });

  describe('onChange', () => {
    it('should call onChange whenever `isOpen` changes', () => {
      const onChange = jest.fn();

      const { rerender } = render({
        onChange,
      });

      rerender({
        isOpen: true,
      });

      expect(onChange).toHaveBeenCalledWith(true);

      rerender({
        isOpen: false,
      });

      expect(onChange).toHaveBeenCalledWith(false);
    });
  });

  describe('onClose', () => {
    it('should call `onClose` only when `isOpen` is true', () => {
      const onClose = jest.fn();

      const { rerender } = render({
        onClose,
      });

      rerender({
        isOpen: true,
      });

      expect(onClose).not.toHaveBeenCalled();

      rerender({
        isOpen: false,
      });

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('on mount', () => {
    it('should not call any callbacks when first mounted', () => {
      const onOpen = jest.fn();
      const onChange = jest.fn();
      const onClose = jest.fn();

      render({
        onOpen,
        onChange,
        onClose,
      });

      [onOpen, onChange, onClose].forEach((callback) => {
        expect(callback).not.toHaveBeenCalled();
      });
    });
  });
});
