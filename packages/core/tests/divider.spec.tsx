import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import ThemeProvider from '@brix-ui/theme';
import { matchMedia } from '@brix-ui/utils/tests';

import Divider, { DividerProps } from '../src/divider';

const dividerId = 'divider';

const renderWithProps = (props = {} as DividerProps) => {
  return render(<Divider data-testid={dividerId} {...props} />, {
    wrapper: ThemeProvider,
  });
};

const pseudoElement = (name: string) => `&[data-has-children]:${name}`;

describe('<Divider />', () => {
  beforeEach(() => {
    matchMedia();
  });

  describe('thickness', () => {
    describe('without children', () => {
      describe('when direction is `row`', () => {
        it('should apply `thickness` to the height of the element and leave width at 100%', () => {
          const { getByTestId } = renderWithProps({
            thickness: '1px',
            direction: 'row',
          });

          expect(getByTestId(dividerId)).toHaveStyleRule('height', '1px');
          expect(getByTestId(dividerId)).toHaveStyleRule('width', '100%');
        });
      });

      describe('when direction is `column`', () => {
        it('should apply `thickness` to the width of the element and leave height at 100%', () => {
          const { getByTestId } = renderWithProps({
            thickness: '1px',
            direction: 'column',
          });

          expect(getByTestId(dividerId)).toHaveStyleRule('width', '1px');
          expect(getByTestId(dividerId)).toHaveStyleRule('height', '100%');
        });
      });
    });

    describe('with children', () => {
      describe('when direction is `row`', () => {
        it('should apply `thickness` to the height of both pseudo-elements', () => {
          const { getByTestId } = renderWithProps({
            thickness: '1px',
            direction: 'row',
            children: 'Children',
            align: 'center',
          });

          ['before', 'after'].forEach((name) => {
            expect(getByTestId(dividerId)).toHaveStyleRule('height', '1px', {
              modifier: pseudoElement(name),
            });
            expect(getByTestId(dividerId)).toHaveStyleRule('width', '100%', {
              modifier: pseudoElement(name),
            });
          });
        });
      });
    });
  });

  describe('margin', () => {
    describe('when specified as a single value', () => {
      describe('when direction is `row`', () => {
        it('should apply margin vertically', () => {
          const { getByTestId } = renderWithProps({
            margin: '1rem',
            direction: 'row',
          });

          expect(getByTestId(dividerId)).toHaveStyleRule('margin', '1rem 0');
        });
      });

      describe('when direction is `column`', () => {
        it('should apply margin horizontally', () => {
          const { getByTestId } = renderWithProps({
            margin: '1rem',
            direction: 'column',
          });

          expect(getByTestId(dividerId)).toHaveStyleRule('margin', '0 1rem');
        });
      });
    });

    describe('when specified as multiple values', () => {
      it('should apply margin normally', () => {
        const { getByTestId } = renderWithProps({
          margin: '1px 2px 3px 4px',
          direction: 'row',
        });

        expect(getByTestId(dividerId)).toHaveStyleRule('margin', '1px 2px 3px 4px');
      });
    });
  });

  describe('children padding', () => {
    const options = {
      modifier: '&[data-has-children] > *',
    };

    describe('when specified as a single value', () => {
      describe('when direction is `row`', () => {
        it('should apply padding horizontally', () => {
          const { getByTestId } = renderWithProps({
            padding: '1rem',
            direction: 'row',
            children: 'Children',
          });

          expect(getByTestId(dividerId)).toHaveStyleRule('padding', '0 1rem', options);
        });
      });

      describe('when direction is `column`', () => {
        it('should apply padding vertically', () => {
          const { getByTestId } = renderWithProps({
            padding: '1rem',
            direction: 'column',
            children: 'Children',
          });

          expect(getByTestId(dividerId)).toHaveStyleRule('padding', '1rem 0', options);
        });
      });
    });

    describe('when specified as multiple values', () => {
      it('should apply padding normally', () => {
        const { getByTestId } = renderWithProps({
          padding: '1px 2px 3px 4px',
          direction: 'row',
          children: 'Children',
        });

        expect(getByTestId(dividerId)).toHaveStyleRule('padding', '1px 2px 3px 4px', options);
      });
    });
  });

  describe('redLine', () => {
    describe('when align is `start`', () => {
      it('should apply `redLine` to the `:before` pseudo-element', () => {
        const { getByTestId } = renderWithProps({
          align: 'start',
          children: 'Children',
          redLine: '1px',
        });

        expect(getByTestId(dividerId)).toHaveStyleRule('width', '1px', {
          modifier: pseudoElement('before'),
        });
      });
    });

    describe('when align is `center`', () => {
      it('should not apply `redLine`', () => {
        const { getByTestId } = renderWithProps({
          align: 'center',
          children: 'Children',
          redLine: '1px',
        });

        ['before', 'after'].forEach((name) => {
          expect(getByTestId(dividerId)).toHaveStyleRule('width', '100%', {
            modifier: pseudoElement(name),
          });
        });
      });
    });

    describe('when align is `end`', () => {
      it('should apply `redLine` to the `:after` pseudo-element', () => {
        const { getByTestId } = renderWithProps({
          align: 'end',
          children: 'Children',
          redLine: '1px',
        });

        expect(getByTestId(dividerId)).toHaveStyleRule('width', '1px', {
          modifier: pseudoElement('after'),
        });
      });
    });
  });
});
