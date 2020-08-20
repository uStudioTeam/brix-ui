import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import type { StatusProps } from './status.props';
import Status from './status.component';

const statusId = 'status';

const renderWithProps = (props: StatusProps = { intent: 'accent' }) => {
  return render(<Status data-testid={statusId} {...props} />);
};

describe('<Status />', () => {
  describe('intent', () => {
    describe('when intent value is "accent"', () => {
      it('should have property background with value of "#9CC6F0"', () => {
        const { getByTestId } = renderWithProps({ intent: 'accent' });

        expect(getByTestId(statusId)).toHaveStyleRule('background', '#1a81db');
      });
    });
  });
});
