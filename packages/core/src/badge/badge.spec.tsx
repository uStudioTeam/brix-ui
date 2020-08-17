import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import type { BadgeProps } from './badge.props';
import Badge from './badge.component';

const badgeId = 'badge';

const renderWithProps = (props: BadgeProps = {}) => {
  return render(<Badge data-testid={badgeId} {...props} />);
};

describe('<Badge />', () => {
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
        const { getByTestId } = renderWithProps({});

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
