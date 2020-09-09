import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { TextDecoration } from '@ustudio-ui/types/typography';

import Text, { TextProps } from '../src/text';

const textId = 'text';

const renderWithProps = (props: TextProps = {}) => {
  return render(<Text data-testid={textId} {...props} />);
};

describe('<Text />', () => {
  describe('decoration', () => {
    describe('empty value', () => {
      it('should not apply any css properties related to decoration', () => {
        const { getByTestId } = renderWithProps({
          decoration: undefined,
        });

        ['text-decoration', 'font-style'].forEach((property) => {
          expect(getByTestId(textId)).not.toHaveStyleRule(property);
        });
      });
    });

    describe(TextDecoration.Italic, () => {
      it('should apply `font-style` property', () => {
        const { getByTestId } = renderWithProps({
          decoration: TextDecoration.Italic,
        });

        expect(getByTestId(textId)).toHaveStyleRule('font-style', TextDecoration.Italic);
      });
    });

    describe(TextDecoration.Underline, () => {
      it('should apply `text-decoration` property', () => {
        const { getByTestId } = renderWithProps({
          decoration: TextDecoration.Underline,
        });

        expect(getByTestId(textId)).toHaveStyleRule('text-decoration', TextDecoration.Underline);
      });
    });

    describe(TextDecoration.LineThrough, () => {
      it('should apply `text-decoration` property', () => {
        const { getByTestId } = renderWithProps({
          decoration: TextDecoration.LineThrough,
        });

        expect(getByTestId(textId)).toHaveStyleRule('text-decoration', TextDecoration.LineThrough);
      });
    });
  });

  describe('line height compensation', () => {
    describe('as boolean', () => {
      it('should add a top margin depending on a variant', () => {
        const { getByTestId } = renderWithProps({
          lineHeightCompensation: true,
          variant: 'p',
        });

        expect(getByTestId(textId)).toHaveStyleRule('margin-top', '-2px');
      });
    });

    describe('as function', () => {
      it('should add a top margin depending on a passed function return value', () => {
        const { getByTestId } = renderWithProps({
          lineHeightCompensation: () => -5,
          variant: 'p',
        });

        expect(getByTestId(textId)).toHaveStyleRule('margin-top', '-5px');
      });
    });

    describe('not specified', () => {
      it('should not add any top margin', () => {
        const { getByTestId } = renderWithProps({
          variant: 'p',
        });

        expect(getByTestId(textId)).not.toHaveStyleRule('margin-top');
      });
    });
  });
});
