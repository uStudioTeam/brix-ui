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

  describe('intent', () => {
    describe('when intent value is "critical"', () => {
      it('should have property background with value of "var(--c-critical-strong-up)"', () => {
        const { getByTestId } = renderWithProps({ intent: 'critical' });

        expect(getByTestId(statusId)).toHaveStyleRule('background', 'var(--c-critical-strong-up)');
      });
    });
  });
});
