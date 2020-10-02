import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import ThemeProvider from '@brix-ui/theme';
import { matchMedia } from '@brix-ui/utils/tests';

import Tag, { TagProps } from '../src/tag';

const tagId = 'tag';

const renderWithProps = (props: Partial<TagProps> = {}) => {
  return render(
    <ThemeProvider>
      <Tag data-testid={tagId} {...props} />
    </ThemeProvider>
  );
};

describe('<Tag />', () => {
  beforeEach(() => {
    matchMedia();
  });

  describe('onClose', () => {
    describe('when not specified', () => {
      it('should not render close button', () => {
        const { getByTestId } = renderWithProps({
          onClose: undefined,
        });

        expect(getByTestId(tagId).querySelector('button')).toBe(null);
      });
    });

    describe('when specified', () => {
      it('should render close button and trigger `onClose` function', () => {
        const onClose = jest.fn();

        const { getByTestId } = renderWithProps({
          onClose,
          closeIcon: <div />,
        });

        expect(getByTestId(tagId).querySelector('button')).not.toBe(null);

        fireEvent.click(getByTestId(tagId).querySelector('button') as HTMLButtonElement);

        expect(onClose).toHaveBeenCalledTimes(1);
      });
    });
  });
});
