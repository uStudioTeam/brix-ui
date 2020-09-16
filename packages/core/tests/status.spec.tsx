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

  describe('success', () => {
    describe('when intent value is "success"', () => {
      it('should have property intent with value of "#54c837"', () => {
        const { getByTestId } = renderWithProps({ intent: 'success' });

        expect(getByTestId(statusId)).toHaveStyleRule('background', '#54c837');
      });
    });
  });
});
