import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import ThemeProvider from '@ustudio-ui/theme';
import { matchMedia } from '@ustudio-ui/utils/tests';

import Badge, { BadgeProps } from '../src/badge';

const badgeId = 'badge';

const renderWithProps = (props: BadgeProps = {}, children: ReactNode = <div />) => {
  return render(
    <ThemeProvider>
      <Badge data-testid={badgeId} {...props}>
        {children}
      </Badge>
    </ThemeProvider>
  );
};

// @ToDo: add `transform: translate` into position tests
describe('<Badge />', () => {
  matchMedia();

  describe('standalone', () => {
    describe('when children are supplied', () => {
      it('should render as absolutely positioned element around children', () => {
        const { getByTestId } = renderWithProps();

        ['position', 'top', 'left', 'transform'].forEach((property) => {
          expect(getByTestId(badgeId)).toHaveStyleRule(property, expect.any(String));
        });
      });
    });

    describe('when children are missing', () => {
      it('should render as a standalone element', () => {
        const { getByTestId } = renderWithProps({}, null);

        ['position', 'top', 'left', 'transform'].forEach((property) => {
          expect(getByTestId(badgeId)).not.toHaveStyleRule(property);
        });
      });
    });
  });

  describe('position', () => {
    describe('when horizontalPosition value is "start"', () => {
      it('should have property left with value of 0', () => {
        const { getByTestId } = renderWithProps({ horizontalPosition: 'start' });

        expect(getByTestId(badgeId)).toHaveStyleRule('left', '0');
      });
    });

    describe('when horizontalPosition value is "center"', () => {
      it('should have property left with value of 50%', () => {
        const { getByTestId } = renderWithProps({ horizontalPosition: 'center' });

        expect(getByTestId(badgeId)).toHaveStyleRule('left', '50%');
      });
    });

    describe('when horizontalPosition value is "end"', () => {
      it('should have property left with value of 100%', () => {
        const { getByTestId } = renderWithProps({ horizontalPosition: 'end' });

        expect(getByTestId(badgeId)).toHaveStyleRule('left', '100%');
      });
    });

    describe('when horizontalPosition is undefined', () => {
      it('should have property left with value of 100%', () => {
        const { getByTestId } = renderWithProps();

        expect(getByTestId(badgeId)).toHaveStyleRule('left', '100%');
      });
    });

    describe('when verticalOffset value is defined', () => {
      it('should shift badge on defined value', () => {
        const { getByTestId } = renderWithProps({ verticalOffset: '30px' });

        expect(getByTestId(badgeId)).toHaveStyleRule('transform', 'translate(calc(0px - 50%),calc(30px - 50%))');
      });
    });

    describe('when horizontalOffset value is defined', () => {
      it('should shift badge on defined value', () => {
        const { getByTestId } = renderWithProps({ horizontalOffset: '50px' });

        expect(getByTestId(badgeId)).toHaveStyleRule('transform', 'translate(calc(50px - 50%),calc(0px - 50%))');
      });
    });
  });
});
