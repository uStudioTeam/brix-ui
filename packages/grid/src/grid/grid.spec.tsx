import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import ThemeProvider, { Theme } from '@ustudio-ui/theme';
import { Direction } from '@ustudio-ui/types/css';

import Cell from '../cell';
import Grid from './grid.component';
import type { GridProps } from './grid.props';

const matchMedia = (minWidth: number = 0) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: any) => {
      const mock = () => {};

      return {
        matches: query === `screen and (min-width: ${minWidth}px)`,
        media: query,
        onchange: null,
        addListener: mock,
        removeListener: mock,
        addEventListener: mock,
        removeEventListener: mock,
        dispatchEvent: mock,
      };
    },
  });
};

const gridId = 'grid';

const renderWithProps = <P extends Partial<GridProps>>(props: P = {} as P) => {
  return render(
    <ThemeProvider
      theme={{
        typography: {
          body: {},
          code: {},
          article: {},
        } as Theme['typography'],
      }}
    >
      <Grid data-testid={gridId} {...props}>
        <Cell />
      </Grid>
    </ThemeProvider>
  );
};

describe('<Grid />', () => {
  beforeEach(() => {
    matchMedia();
  });

  describe('gap', () => {
    describe('empty value', () => {
      it('should not apply `grid-gap` onto CSS', () => {
        const { getByTestId } = renderWithProps({
          gap: '',
        });

        expect(getByTestId(gridId)).not.toHaveStyleRule('grid-gap');
      });
    });

    describe('as string', () => {
      it('should apply single grid-gap', () => {
        const { getByTestId } = renderWithProps({
          gap: '1px',
        });

        expect(getByTestId(gridId)).toHaveStyleRule('grid-gap', '1px');
      });
    });

    describe('as axes object', () => {
      describe('when one axis is not set', () => {
        it('should apply only the defined one', () => {
          const { getByTestId } = renderWithProps({
            gap: {
              vertical: '1px',
            },
          });

          expect(getByTestId(gridId)).toHaveStyleRule('grid-row-gap', '1px');
        });
      });

      describe('when both axes are set', () => {
        it('should apply gap in both directions', () => {
          const { getByTestId } = renderWithProps({
            gap: {
              vertical: '1px',
              horizontal: '2px',
            },
          });

          expect(getByTestId(gridId)).toHaveStyleRule('grid-row-gap', '1px');
          expect(getByTestId(gridId)).toHaveStyleRule('grid-column-gap', '2px');
        });
      });
    });
  });

  describe('areas formatting by direction', () => {
    const renderWithMultipleCells = (direction: GridProps['direction']) => {
      return render(
        <ThemeProvider
          theme={{
            typography: {
              body: {},
              code: {},
              article: {},
            } as Theme['typography'],
          }}
        >
          <Grid data-testid={gridId} direction={direction}>
            <Cell area="cell1" />

            <Cell area="cell2" />
          </Grid>
        </ThemeProvider>
      );
    };

    describe(`when ${Direction.Column}`, () => {
      it("should wrap each area into '' and join them with space", () => {
        const { getByTestId } = renderWithMultipleCells(Direction.Column);

        expect(getByTestId(gridId)).toHaveStyleRule('grid-template-areas', /'cell1'\s+'cell2'/);
      });
    });

    describe(`when ${Direction.Row} or undefined`, () => {
      it("should wrap all areas into '' and join them with space", () => {
        const { getByTestId } = renderWithMultipleCells(Direction.Row);

        expect(getByTestId(gridId)).toHaveStyleRule('grid-template-areas', /'cell1\s+cell2'/);
      });
    });
  });
});
