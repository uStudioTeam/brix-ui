import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import ThemeProvider from '@ustudio-ui/theme';
import { matchMedia } from '@ustudio-ui/utils/tests';

import Status, { StatusProps } from '../src/status';

const statusId = 'status';

const renderWithProps = (props: StatusProps = { intent: 'accent' }) => {
  return render(
    <ThemeProvider>
      <Status data-testid={statusId} {...props} />
    </ThemeProvider>
  );
};

describe('<Status />', () => {
  matchMedia();

  describe('intent', () => {
    describe('when intent value is "success"', () => {
      it('should have property border with value of "2px solid var(--c-success-weak-up)"', () => {
        const { getByTestId } = renderWithProps({ intent: 'success' });

        expect(getByTestId(statusId)).toHaveStyleRule('border', '2px solid var(--c-success-weak-up)');
      });
    });
  });

  describe('animation', () => {
    describe('when animation value is pulsing', () => {
      it('should have property animation with value of "cRIjZl 2s infinite"', () => {
        const { getByTestId } = renderWithProps({ intent: 'success', animation: 'pulsing' });

        expect(getByTestId(statusId)).toHaveStyleRule('animation', 'cRIjZl 2s infinite');
      });
    });
  });
});
