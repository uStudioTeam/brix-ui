import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import ThemeProvider, { Theme } from '@ustudio-ui/theme';
import type { ButtonProps } from './button.props';
import Button from './button.component';

const buttonId = 'button';

const renderWithProps = (props: ButtonProps) => {
  return render(
    <ThemeProvider
      theme={{
        typography: {
          body: {},
          code: {},
          article: {},
        } as Theme['typography'],
      }}
    >
      <Button data-testid={buttonId} {...props}>
        Click
      </Button>
    </ThemeProvider>
  );
};

describe('<Button />', () => {
  describe('isDisabled', () => {
    describe('when isDisabled: true;', () => {
      it('should become disabled', () => {
        const { getByTestId } = renderWithProps({ isDisabled: true });
        // expect(getByTestId(buttonId)?.closest('button')?.disabled).toBeTruthy();
        // expect(getByTestId('buttonId')).toHave
        console.log(getByTestId(buttonId).getAttribute('disabled'));
        expect(getByTestId(buttonId).hasAttribute('disabled')).toBe(true);
      });

      describe('when appearance is contained', () => {
        it('should have contained disabled styles', () => {
          const { getByTestId } = renderWithProps({ isDisabled: true, appearance: 'contained' });

          [
            ['background-color', 'var(--c-faint-w-u)'],
            ['color', 'var(--c-faint-s)'],
            ['cursor', 'not-allowed'],
          ].forEach(([property, value]) => {
            expect(getByTestId(buttonId)).toHaveStyleRule(property, value);
          });
        });
      });

      describe('when appearance is outlined', () => {
        it('should have outlined disabled styles', () => {
          const { getByTestId } = renderWithProps({ isDisabled: true, appearance: 'outlined' });

          [
            ['color', 'var(--c-faint-s)'],
            ['border', '1px solid var(--c-faint-w-u)'],
            ['cursor', 'not-allowed'],
          ].forEach(([property, value]) => {
            expect(getByTestId(buttonId)).toHaveStyleRule(property, value);
          });
        });
      });
    });

    describe('when appearance is text', () => {
      it('should have text disabled styles', () => {
        const { getByTestId } = renderWithProps({ isDisabled: true, appearance: 'text' });

        [
          ['color', 'var(--c-faint-s)'],
          ['border', '1px solid transparent'],
          ['cursor', 'not-allowed'],
        ].forEach(([property, value]) => {
          expect(getByTestId(buttonId)).toHaveStyleRule(property, value);
        });
      });
    });

    describe('when appearance is faint', () => {
      it('should have faint disabled styles', () => {
        const { getByTestId } = renderWithProps({ isDisabled: true, appearance: 'faint' });

        [
          ['background-color', 'var(--c-faint-w-u)'],
          ['color', 'var(--c-faint-s)'],
          ['cursor', 'not-allowed'],
        ].forEach(([property, value]) => {
          expect(getByTestId(buttonId)).toHaveStyleRule(property, value);
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
            ['background-color', 'var(--c-accent-s)'],
            ['color', 'var(--c-base-w)'],
          ].forEach(([property, value]) => {
            expect(getByTestId(buttonId)).toHaveStyleRule(property, value);
          });
        });

        describe('when button is active', () => {
          it('should have styles for contained active button', () => {
            const { getByTestId } = renderWithProps({ appearance: 'contained', intent: 'accent' });

            fireEvent.click(getByTestId(buttonId));

            [
              ['background-color', 'var(--c-accent-s-d)'],
              ['color', 'var(--c-accent-w-u)'],
            ].forEach(([property, value]) => {
              expect(getByTestId(buttonId)).toHaveStyleRule(property, value);
            });
          });
        });
      });
    });
  });

  describe('when values for props are not provided', () => {
    it('should render button with default styles - contained appearance, base intent, isDisables: false', () => {
      const { getByTestId } = renderWithProps({});

      expect(getByTestId(buttonId)).toHaveStyleRule('color', 'var(--c-base-w)');
      expect(getByTestId(buttonId)).toHaveStyleRule('background-color', 'var(--c-base-s)');
      expect(getByTestId(buttonId).hasAttribute('disabled')).toBe(false);
    });
  });
});
