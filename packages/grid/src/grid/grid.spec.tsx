import React from 'react';
import { render, waitFor } from '@testing-library/react';
import 'jest-styled-components';

import ThemeProvider, { Theme } from '@ustudio-ui/theme';
import { defaultTheme } from '@ustudio-ui/theme/default-theme';
import { Breakpoint } from '@ustudio-ui/types/css';

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

  describe('getting props from breakpoints', () => {
    it('should overwrite default props with that of matched breakpoint', () => {
      matchMedia(defaultTheme.breakpoints[Breakpoint.Md]);

      const { getByTestId } = renderWithProps({
        maxWidth: '1px',
        md: {
          maxWidth: '2px',
        },
      });

      waitFor(() => expect(getByTestId(gridId)).toHaveStyleRule('max-width', '2px'));
    });
  });
});
