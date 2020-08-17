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
    describe('when horizontalPosition equal start', () => {
      it('should have property left with 0', () => {
        const { getByTestId } = renderWithProps({ horizontalPosition: 'start' });
        expect(getByTestId(badgeId)).toHaveStyleRule('left', '0');
      });
    });

    describe('when horizontalPosition equal center', () => {
      it('should have property left with 50%', () => {
        const { getByTestId } = renderWithProps({ horizontalPosition: 'center' });
        expect(getByTestId(badgeId)).toHaveStyleRule('left', '50%');
      });
    });

    describe('when horizontalPosition equal end', () => {
      it('should have property left with 100%', () => {
        const { getByTestId } = renderWithProps({ horizontalPosition: 'end' });
        expect(getByTestId(badgeId)).toHaveStyleRule('left', '100%');
      });
    });

    describe('when horizontalPosition is undefined', () => {
      it('should have property left with 100%', () => {
        const { getByTestId } = renderWithProps({});
        expect(getByTestId(badgeId)).toHaveStyleRule('left', '100%');
      });
    });

    describe('when verticalPosition is undefined', () => {
      it('should have property top with 0', () => {
        const { getByTestId } = renderWithProps({});
        expect(getByTestId(badgeId)).toHaveStyleRule('top', '0');
      });
    });

    describe('when verticalPosition is start', () => {
      it('should have property top with 0', () => {
        const { getByTestId } = renderWithProps({ verticalPosition: 'start' });
        expect(getByTestId(badgeId)).toHaveStyleRule('top', '0');
      });
    });

    describe('when verticalPosition is center', () => {
      it('should have property top with 50%', () => {
        const { getByTestId } = renderWithProps({ verticalPosition: 'center' });
        expect(getByTestId(badgeId)).toHaveStyleRule('top', '50%');
      });
    });

    describe('when verticalPosition is end', () => {
      it('should have property top with 100%', () => {
        const { getByTestId } = renderWithProps({ verticalPosition: 'end' });
        expect(getByTestId(badgeId)).toHaveStyleRule('top', '100%');
      });
    });

    describe('when verticalOffset = 30px', () => {
      it('should have property transform', () => {
        const { getByTestId } = renderWithProps({ verticalOffset: '30px' });
        expect(getByTestId(badgeId)).toHaveStyleRule('transform', 'translate(calc(0px - 50%),calc(30px - 50%))');
      });
    });

    describe('when horizontalOffset = 50px', () => {
      it('should have property transform', () => {
        const { getByTestId } = renderWithProps({ horizontalOffset: '50px' });
        expect(getByTestId(badgeId)).toHaveStyleRule('transform', 'translate(calc(50px - 50%),calc(0px - 50%))');
      });
    });
  });
});
