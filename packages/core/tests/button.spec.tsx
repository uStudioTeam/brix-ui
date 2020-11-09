import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import ThemeProvider from '@brix-ui/theme';
import { matchMedia } from '../../../mocks/match-media';

import Button, { ButtonProps } from '../src/button';

const buttonId = 'button';

const renderWithProps = (props: ButtonProps) => {
  return render(
    <ThemeProvider>
      <Button data-testid={buttonId} {...props}>
        Click
      </Button>
    </ThemeProvider>
  );
};

describe('<Button />', () => {
  beforeEach(() => {
    matchMedia();
  });

  describe('isDisabled', () => {
    describe('when isDisabled: true;', () => {
      const modifier = {
        modifier: ':disabled',
      };

      it('should become disabled', () => {
        const { getByTestId } = renderWithProps({ isDisabled: true });

        expect(getByTestId(buttonId).hasAttribute('disabled')).toBe(true);
      });

      describe('when appearance is contained', () => {
        it('should have contained disabled styles', () => {
          const { getByTestId } = renderWithProps({ isDisabled: true, appearance: 'contained' });

          [
            ['background-color', 'var(--c-faint-weak)'],
            ['color', 'var(--c-faint-strong-down)'],
            ['cursor', 'not-allowed'],
          ].forEach(([property, value]) => {
            expect(getByTestId(buttonId)).toHaveStyleRule(property, value, modifier);
          });
        });
      });

      describe('when appearance is outlined', () => {
        it('should have outlined disabled styles', () => {
          const { getByTestId } = renderWithProps({ isDisabled: true, appearance: 'outlined' });

          [
            ['color', 'var(--c-faint-strong-down)'],
            ['border-color', 'var(--c-faint-weak-up)'],
            ['cursor', 'not-allowed'],
          ].forEach(([property, value]) => {
            expect(getByTestId(buttonId)).toHaveStyleRule(property, value, modifier);
          });
        });
      });

      describe('when appearance is text', () => {
        it('should have text disabled styles', () => {
          const { getByTestId } = renderWithProps({ isDisabled: true, appearance: 'text' });

          [
            ['color', 'var(--c-faint-strong)'],
            ['cursor', 'not-allowed'],
          ].forEach(([property, value]) => {
            expect(getByTestId(buttonId)).toHaveStyleRule(property, value, modifier);
          });
        });
      });

      describe('when appearance is faint', () => {
        it('should have faint disabled styles', () => {
          const { getByTestId } = renderWithProps({ isDisabled: true, appearance: 'faint' });

          [
            ['background-color', 'var(--c-faint-weak)'],
            ['color', 'var(--c-faint-strong-down)'],
            ['cursor', 'not-allowed'],
          ].forEach(([property, value]) => {
            expect(getByTestId(buttonId)).toHaveStyleRule(property, value, modifier);
          });
        });
      });
    });
  });

  describe('not disabled', () => {
    describe('when appearance is contained', () => {
      describe('when intent is accent', () => {
        it('should have contained styles with accent intent', () => {
          const { getByTestId } = renderWithProps({ appearance: 'contained', intent: 'accent' });

          [
            ['background-color', 'var(--c-accent-strong)'],
            ['color', 'var(--c-text-base-weak)'],
          ].forEach(([property, value]) => {
            expect(getByTestId(buttonId)).toHaveStyleRule(property, value);
          });
        });

        describe('when button is active', () => {
          it('should have styles for contained active button', () => {
            const { getByTestId } = renderWithProps({ appearance: 'contained', intent: 'accent' });

            fireEvent.click(getByTestId(buttonId));

            [
              ['background-color', 'var(--c-accent-strong)'],
              ['color', 'var(--c-text-base-weak)'],
            ].forEach(([property, value]) => {
              expect(getByTestId(buttonId)).toHaveStyleRule(property, value);
            });
          });
        });
      });
    });
  });

  describe('when values for props are not provided', () => {
    it('should render button with default styles - contained appearance, base intent, isDisabled: false', () => {
      const { getByTestId } = renderWithProps({});

      expect(getByTestId(buttonId)).toHaveStyleRule('color', 'var(--c-base-weak)');
      expect(getByTestId(buttonId)).toHaveStyleRule('background-color', 'var(--c-base-strong)');
      expect(getByTestId(buttonId).hasAttribute('disabled')).toBe(false);
    });
  });
});
