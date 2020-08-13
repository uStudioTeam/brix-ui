import { renderHook, act } from '@testing-library/react-hooks';

import { useAreaBuilder } from './use-area-builder';

describe('useAreaBuilder', () => {
  describe('mount_cell', () => {
    describe('dispatched cell size', () => {
      describe('when the size is equal to 1', () => {
        it('should add its area name unchanged', () => {
          const { result, waitFor } = renderHook(useAreaBuilder);
          const [state, dispatcher] = result.current;

          act(() => {
            dispatcher.mountCell({
              id: 'cell',
              size: 1,
            });
          });

          waitFor(() => expect(state.areas).toStrictEqual(['cell']));
        });
      });

      describe('when the size is equal to 2', () => {
        it('should add (id)s, (id)e', () => {
          const { result, waitFor } = renderHook(useAreaBuilder);
          const [state, dispatcher] = result.current;

          act(() => {
            dispatcher.mountCell({
              id: 'cell',
              size: 2,
            });
          });

          waitFor(() => expect(state.areas).toStrictEqual(['cells', 'celle']));
        });
      });

      describe('when the size is equal to or is more than 3', () => {
        it('should add (id)s, (id)*(size - 2), (id)e', () => {
          const { result, waitFor } = renderHook(useAreaBuilder);
          const [state, dispatcher] = result.current;

          act(() => {
            dispatcher.mountCell({
              id: 'cell',
              size: 3,
            });
          });

          waitFor(() => expect(state.areas).toStrictEqual(['cells', 'cell', 'celle']));
        });
      });
    });

    describe('when offset is specified', () => {
      it("should add `.`*(offset) before and after cell's id", () => {
        const { result, waitFor } = renderHook(useAreaBuilder);
        const [state, dispatcher] = result.current;

        act(() => {
          dispatcher.mountCell({
            id: 'cell',
            size: 1,
            offset: [1, 2],
          });
        });

        waitFor(() => expect(state.areas).toStrictEqual(['.', 'cell', '.', '.']));
      });
    });
  });
});
