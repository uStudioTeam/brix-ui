import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { TextDecoration } from '@ustudio-ui/types/typography';

import Text from './text.component';
import type { TextProps } from './text.props';

const textId = 'text';

const renderWithDecoration = (value: TextProps['decoration']) => {
  return render(<Text data-testid={textId} decoration={value} />);
};

describe('<Text />', () => {
  describe('decoration', () => {
    describe('empty value', () => {
      it('should not apply any css properties related to decoration', () => {
        const { getByTestId } = renderWithDecoration(undefined);

        ['text-decoration', 'font-style'].forEach((property) => {
          expect(getByTestId(textId)).not.toHaveStyleRule(property);
        });
      });
    });

    describe(TextDecoration.Italic, () => {
      it('should apply `font-style` property', () => {
        const { getByTestId } = renderWithDecoration(TextDecoration.Italic);

        expect(getByTestId(textId)).toHaveStyleRule('font-style', TextDecoration.Italic);
      });
    });

    describe(TextDecoration.Underline, () => {
      it('should apply `text-decoration` property', () => {
        const { getByTestId } = renderWithDecoration(TextDecoration.Underline);

        expect(getByTestId(textId)).toHaveStyleRule('text-decoration', TextDecoration.Underline);
      });
    });

    describe(TextDecoration.LineThrough, () => {
      it('should apply `text-decoration` property', () => {
        const { getByTestId } = renderWithDecoration(TextDecoration.LineThrough);

        expect(getByTestId(textId)).toHaveStyleRule('text-decoration', TextDecoration.LineThrough);
      });
    });
  });
});
