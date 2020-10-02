import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import ThemeProvider from '@brix-ui/theme';
import { matchMedia } from '@brix-ui/utils/tests';

import Grid from '../src/grid';
import Cell, { CellProps } from '../src/cell';

const cellId = 'cell';

const renderWithProps = <P extends Partial<CellProps>>(props: P = {} as P) => {
  return render(
    <ThemeProvider>
      <Grid>
        <Cell data-testid={cellId} {...props} />
      </Grid>
    </ThemeProvider>
  );
};

describe('<Cell />', () => {
  beforeEach(() => {
    matchMedia();
  });

  describe('template formation', () => {
    describe('size is empty', () => {
      it('should apply `grid-area` property onto CSS', () => {
        const { getByTestId } = renderWithProps({
          area: 'cell',
        });

        expect(getByTestId(cellId)).toHaveStyleRule('grid-area', 'cell');
      });
    });

    describe('size equals to 1', () => {
      it('should apply `grid-area` property onto CSS', () => {
        const { getByTestId } = renderWithProps({
          area: 'cell',
          size: 1,
        });

        expect(getByTestId(cellId)).toHaveStyleRule('grid-area', 'cell');
      });
    });

    describe('size equals to 2', () => {
      it('should create `grid-(direction)` CSS prop with `start / end` indeces', () => {
        const { getByTestId } = renderWithProps({
          area: 'cell',
          size: 2,
        });

        expect(getByTestId(cellId)).toHaveStyleRule('grid-column', '1 / 3');
      });
    });

    describe('size equals to 3 or more', () => {
      it('should create `grid-(direction)` CSS prop with `start / end` indeces', () => {
        const { getByTestId } = renderWithProps({
          area: 'cell',
          size: 3,
        });

        expect(getByTestId(cellId)).toHaveStyleRule('grid-column', '1 / 4');
      });
    });
  });
});
