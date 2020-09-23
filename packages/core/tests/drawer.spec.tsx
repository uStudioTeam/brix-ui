import React, { ReactElement } from 'react';
import { render, RenderResult } from '@testing-library/react';
import 'jest-styled-components';

import ThemeProvider from '@brix-ui/theme';
import { matchMedia } from '@brix-ui/utils/tests';
import { Position } from '@brix-ui/types/css';
import { objectValues } from '@brix-ui/utils/functions';

import Drawer, { DrawerProps } from '../src/drawer';

const drawerId = 'drawer';

const withProps = (props = {} as DrawerProps): ReactElement => {
  return (
    <ThemeProvider>
      <Drawer data-testid={drawerId} {...props} />
    </ThemeProvider>
  );
};

describe('<Drawer />', () => {
  matchMedia();

  describe('unmountOnExit', () => {
    describe('when set to `true`', () => {
      const props = (isOpen: boolean): DrawerProps => ({
        position: 'left',
        unmountOnExit: true,
        isOpen,
      });

      it('should unmount when closed', () => {
        const { getByTestId, container, rerender } = render(withProps(props(false)));

        expect(container.childElementCount).toBe(0);

        rerender(withProps(props(true)));

        expect(getByTestId(drawerId)).not.toBe(null);

        rerender(withProps(props(false)));

        expect(container.childElementCount).toBe(0);
      });
    });

    describe('when set to `false`', () => {
      const props = (isOpen: boolean): DrawerProps => ({
        position: 'left',
        unmountOnExit: false,
        isOpen,
      });

      it('should stay mounted independent of the open state', () => {
        const { getByTestId, rerender } = render(withProps(props(false)));

        expect(getByTestId(drawerId)).not.toBe(null);

        rerender(withProps(props(true)));

        expect(getByTestId(drawerId)).not.toBe(null);

        rerender(withProps(props(false)));

        expect(getByTestId(drawerId)).not.toBe(null);
      });
    });
  });

  describe('position styles', () => {
    describe('position axis', () => {
      const props = (position: DrawerProps['position']): DrawerProps => ({
        position,
        isOpen: false,
      });

      it('should set specified position axis to 0', () => {
        const { getByTestId, rerender } = render(withProps(props('top')));

        objectValues(Position).forEach((position) => {
          rerender(withProps(props(position)));

          expect(getByTestId(drawerId)).toHaveStyleRule(position, '0');
        });
      });
    });

    describe('position: top', () => {
      const props = (isOpen: boolean): DrawerProps => ({
        position: 'top',
        isOpen,
      });

      let result: RenderResult;

      beforeEach(() => {
        result = render(withProps(props(false)));
      });

      describe('border-radius', () => {
        it('should apply only `bottom-left` and `bottom-right` values', () => {
          const { getByTestId } = result;

          ['border-bottom-left-radius', 'border-bottom-right-radius'].forEach((property) => {
            expect(getByTestId(drawerId)).toHaveStyleRule(property, 'var(--border-radius)');
          });
        });
      });

      describe('translate', () => {
        it('should translateY between 0 and -100%', () => {
          const { getByTestId, rerender } = result;

          expect(getByTestId(drawerId)).toHaveStyleRule('transform', 'translateY(-100%)');

          rerender(withProps(props(true)));

          expect(getByTestId(drawerId)).toHaveStyleRule('transform', 'translateY(0)');
        });
      });
    });

    describe('position: right', () => {
      const props = (isOpen: boolean): DrawerProps => ({
        position: 'right',
        isOpen,
      });

      let result: RenderResult;

      beforeEach(() => {
        result = render(withProps(props(false)));
      });

      describe('border-radius', () => {
        it('should apply only `bottom-left` and `top-left` values', () => {
          const { getByTestId } = result;

          ['border-bottom-left-radius', 'border-top-left-radius'].forEach((property) => {
            expect(getByTestId(drawerId)).toHaveStyleRule(property, 'var(--border-radius)');
          });
        });
      });

      describe('translate', () => {
        it('should translateX between 0 and 100%', () => {
          const { getByTestId, rerender } = result;

          expect(getByTestId(drawerId)).toHaveStyleRule('transform', 'translateX(100%)');

          rerender(withProps(props(true)));

          expect(getByTestId(drawerId)).toHaveStyleRule('transform', 'translateX(0)');
        });
      });
    });

    describe('position: bottom', () => {
      const props = (isOpen: boolean): DrawerProps => ({
        position: 'bottom',
        isOpen,
      });

      let result: RenderResult;

      beforeEach(() => {
        result = render(withProps(props(false)));
      });

      describe('border-radius', () => {
        it('should apply only `top-left` and `top-right` values', () => {
          const { getByTestId } = result;

          ['border-top-left-radius', 'border-top-right-radius'].forEach((property) => {
            expect(getByTestId(drawerId)).toHaveStyleRule(property, 'var(--border-radius)');
          });
        });
      });

      describe('translate', () => {
        it('should translateY between 0 and 100%', () => {
          const { getByTestId, rerender } = result;

          expect(getByTestId(drawerId)).toHaveStyleRule('transform', 'translateY(100%)');

          rerender(withProps(props(true)));

          expect(getByTestId(drawerId)).toHaveStyleRule('transform', 'translateY(0)');
        });
      });
    });

    describe('position: left', () => {
      const props = (isOpen: boolean): DrawerProps => ({
        position: 'left',
        isOpen,
      });

      let result: RenderResult;

      beforeEach(() => {
        result = render(withProps(props(false)));
      });

      describe('border-radius', () => {
        it('should apply only `top-right` and `bottom-right` values', () => {
          const { getByTestId } = result;

          ['border-top-right-radius', 'border-bottom-right-radius'].forEach((property) => {
            expect(getByTestId(drawerId)).toHaveStyleRule(property, 'var(--border-radius)');
          });
        });
      });

      describe('translate', () => {
        it('should translateX between 0 and -100%', () => {
          const { getByTestId, rerender } = result;

          expect(getByTestId(drawerId)).toHaveStyleRule('transform', 'translateX(-100%)');

          rerender(withProps(props(true)));

          expect(getByTestId(drawerId)).toHaveStyleRule('transform', 'translateX(0)');
        });
      });
    });
  });

  describe('axis styles', () => {
    const props = (position: DrawerProps['position']): DrawerProps => ({
      position,
      isOpen: false,
    });

    describe('horizontal (position: left | right)', () => {
      it('should set `height` and `overflow-y` properties', () => {
        const { getByTestId, rerender } = render(withProps(props('left')));

        expect(getByTestId(drawerId)).toHaveStyleRule('height', '100%');
        expect(getByTestId(drawerId)).toHaveStyleRule('max-height', '100%');
        expect(getByTestId(drawerId)).toHaveStyleRule('overflow-y', 'var(--overflow)');

        rerender(withProps(props('right')));

        expect(getByTestId(drawerId)).toHaveStyleRule('height', '100%');
        expect(getByTestId(drawerId)).toHaveStyleRule('max-height', '100%');
        expect(getByTestId(drawerId)).toHaveStyleRule('overflow-y', 'var(--overflow)');
      });
    });

    describe('vertical (position: top | bottom)', () => {
      it('should set `width` and `overflow-x` properties', () => {
        const { getByTestId, rerender } = render(withProps(props('top')));

        expect(getByTestId(drawerId)).toHaveStyleRule('width', '100%');
        expect(getByTestId(drawerId)).toHaveStyleRule('max-width', '100%');
        expect(getByTestId(drawerId)).toHaveStyleRule('overflow-x', 'var(--overflow)');

        rerender(withProps(props('bottom')));

        expect(getByTestId(drawerId)).toHaveStyleRule('width', '100%');
        expect(getByTestId(drawerId)).toHaveStyleRule('max-width', '100%');
        expect(getByTestId(drawerId)).toHaveStyleRule('overflow-x', 'var(--overflow)');
      });
    });
  });
});
