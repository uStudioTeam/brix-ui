import { renderHook, act, HookResult } from '@testing-library/react-hooks';

import sut, { SingleSelection } from '../src/use-single-selection';

describe('useSingleSelection', () => {
  describe('defaultValue', () => {
    it('should create a set of options containing defaultValue and set value to the defaultValue', () => {
      const defaultValue = 'a';

      const { result } = renderHook(() => sut(defaultValue));

      expect(result.current.options.has(defaultValue)).toBe(true);
      expect(result.current.value).toBe(defaultValue);
    });
  });

  describe('setValue', () => {
    it('should set value to the `setValue` argument', () => {
      const { result } = renderHook(sut);

      act(() => {
        result.current.dispatch.setValue('a');
      });

      expect(result.current.value).toBe('a');
    });
  });

  describe('addOption/removeOption', () => {
    let result: HookResult<SingleSelection<string>>;

    beforeEach(() => {
      result = renderHook(() => sut<string>()).result;

      act(() => {
        result.current.dispatch.addOption('a');
      });
    });

    describe('addValue', () => {
      it('should add new option to the set of options', () => {
        expect(result.current.options.has('a')).toBe(true);
      });
    });

    describe('removeValue', () => {
      it('should remove passed option from the set of options', () => {
        act(() => {
          result.current.dispatch.removeOption('a');
        });

        expect(result.current.options.has('a')).toBe(false);
      });
    });
  });
});
