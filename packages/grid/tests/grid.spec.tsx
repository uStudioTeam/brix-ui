import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import ThemeProvider from '@brix-ui/theme';
import { Direction } from '@brix-ui/types/css';
import { matchMedia } from '@brix-ui/utils/tests';

import Cell from '../src/cell';
import Grid, { GridProps } from '../src/grid';

const gridId = 'grid';

const renderWithProps = <P extends Partial<GridProps>>(props: P = {} as P) => {
  return render(
    <ThemeProvider>
      <Grid data-testid={gridId} {...props}>
        <Cell />
      </Grid>
    </ThemeProvider>
  );
};

describe('<Grid />', () => {
  matchMedia();

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
        <ThemeProvider>
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
