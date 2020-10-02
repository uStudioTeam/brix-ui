import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import ThemeProvider from '@brix-ui/theme';
import { matchMedia } from '@brix-ui/utils/tests';

import Skeleton, { SkeletonProps } from '../src/skeleton';

const skeletonId = 'skeleton';

const renderWithProps = (props = {} as SkeletonProps) => {
  return render(
    <ThemeProvider>
      <Skeleton data-testid={skeletonId} {...props} />
    </ThemeProvider>
  );
};

describe('<Skeleton />', () => {
  beforeEach(() => {
    matchMedia();
  });

  describe('size', () => {
    describe('when both size and width/height are specified', () => {
      it('size should be prioritized over the latter', () => {
        const { getByTestId } = renderWithProps({
          width: '1px',
          height: '1px',
          size: '2px',
        });

        ['width', '--height'].forEach((property) => {
          expect(getByTestId(skeletonId)).toHaveStyleRule(property, '2px');
        });
      });
    });

    describe('when the size property is an object', () => {
      it('should create random size value between specified min/max values', () => {
        const { getByTestId } = renderWithProps({
          size: {
            min: 53,
            max: 54,
            unit: '%',
          },
        });

        expect(getByTestId(skeletonId)).toHaveStyleRule('width', /(53|54)%/);
      });
    });

    describe('when height is specified as a text tag', () => {
      it('should apply height of the text element and top/bottom margins for line height', () => {
        const { getByTestId } = renderWithProps({
          height: 'h1',
        });

        expect(getByTestId(skeletonId)).toHaveStyleRule('--height', '1.875rem');
        ['margin-top', 'margin-bottom'].forEach((property) => {
          expect(getByTestId(skeletonId)).toHaveStyleRule(property, 'calc((var(--height) * 0.375) / 2)');
        });
      });
    });
  });

  describe('isRounded', () => {
    describe('when isRounded = true', () => {
      it('should apply borderRadius equal to height / 2', () => {
        const { getByTestId } = renderWithProps({
          height: '2px',
          isRounded: true,
        });

        expect(getByTestId(skeletonId)).toHaveStyleRule('--border-radius', 'calc(var(--height) / 2)');
      });
    });

    describe('when isRounded = false or is not specified', () => {
      it('should apply borderRadius of 2px', () => {
        const { getByTestId } = renderWithProps({
          height: '2px',
          isRounded: false,
        });

        expect(getByTestId(skeletonId)).toHaveStyleRule('--border-radius', '2px');
      });
    });
  });

  describe('isStatic', () => {
    describe('when isStatic = true', () => {
      it('should have only background-color without any animation styles', () => {
        const { getByTestId } = renderWithProps({
          isStatic: true,
        });

        ['background-image', 'background-size', 'animation'].forEach((property) => {
          expect(getByTestId(skeletonId)).not.toHaveStyleRule(property);
        });
        expect(getByTestId(skeletonId)).toHaveStyleRule('background-color', 'var(--background-color)');
      });
    });

    describe('when isStatic = false', () => {
      it('should apply animation styles', () => {
        const { getByTestId } = renderWithProps({
          isStatic: true,
        });

        ['background-image', 'background-size', 'animation'].forEach((property) => {
          expect(getByTestId(skeletonId)).toHaveStyleRule(property);
        });
      });
    });
  });
});
