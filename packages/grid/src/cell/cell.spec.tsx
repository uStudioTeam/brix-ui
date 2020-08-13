import React from 'react';
import { render, waitFor } from '@testing-library/react';
import 'jest-styled-components';

import ThemeProvider, { Theme } from '@ustudio-ui/theme';
import { defaultTheme } from '@ustudio-ui/theme/default-theme';
import { Breakpoint } from '@ustudio-ui/types/css';

import Grid from '../grid';
import Cell from './cell.component';
import { CellProps } from './cell.props';

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

const cellId = 'cell';

const renderWithProps = <P extends Partial<CellProps>>(props: P = {} as P) => {
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

  describe('getting props from breakpoints', () => {
    it('should overwrite default props with that of matched breakpoint', () => {
      matchMedia(defaultTheme.breakpoints[Breakpoint.Md]);

      const { getByTestId } = renderWithProps({
        area: 'cell',
        size: 1,
        md: {
          size: 2,
        },
      });

      waitFor(() => expect(getByTestId(cellId)).toHaveStyleRule('grid-column', '1 / 3'));
    });
  });
});
