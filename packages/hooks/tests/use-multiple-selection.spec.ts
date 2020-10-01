import { renderHook, act, HookResult } from '@testing-library/react-hooks';

import useMultipleSelection, { MultipleSelection } from '../src/use-multiple-selection';

describe('useMultipleSelection', () => {
  describe('defaultValue', () => {
    it('should contain `defaultValue` both in options and value', () => {
      const defaultValue = new Set(['a', 'b']);

      const { result } = renderHook(() => useMultipleSelection(defaultValue));

      ['value', 'options'].forEach((property) => {
        expect(result.current[property as keyof MultipleSelection<string>]).toStrictEqual(defaultValue);
      });
    });
  });

  describe('updateValue', () => {
    let result: HookResult<MultipleSelection<string>>;

    beforeEach(() => {
      result = renderHook(() => useMultipleSelection<string>()).result;

      act(() => {
        result.current.dispatch.updateValue('a');
      });
    });

    describe('when the option is not present in values', () => {
      it('should add the option to values', () => {
        expect(result.current.value.has('a')).toBe(true);
      });
    });

    describe('when the option is already present in values', () => {
      it('should remove the option from values', () => {
        act(() => {
          result.current.dispatch.updateValue('a');
        });

        expect(result.current.value.has('a')).toBe(false);
      });
    });
  });

  describe('clearValue', () => {
    it('should empty the set of values when called', () => {
      const { result } = renderHook(() => useMultipleSelection(new Set(['a', 'b', 'c'])));

      act(() => {
        result.current.dispatch.clearValue();
      });

      expect(result.current.value.size).toBe(0);
    });
  });

  describe('addOption/removeOption', () => {
    let result: HookResult<MultipleSelection<string>>;

    beforeEach(() => {
      result = renderHook(() => useMultipleSelection<string>()).result;

      act(() => {
        result.current.dispatch.addOption('a');
      });
    });

    describe('when adding an option', () => {
      it('should add the option to the set of options', () => {
        expect(result.current.options.has('a')).toBe(true);
      });
    });

    describe('when removing an option', () => {
      it('should remove the option from the set of options', () => {
        act(() => {
          result.current.dispatch.removeOption('a');
        });

        expect(result.current.options.has('a')).toBe(false);
      });
    });
  });
});
