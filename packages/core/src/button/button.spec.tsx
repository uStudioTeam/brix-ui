import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import ThemeProvider, { Theme } from '@ustudio-ui/theme';
import { Values } from '@ustudio-ui/utils/types';
import { Color } from '@ustudio-ui/types/palette';
import { getCssVariable } from '@ustudio-ui/utils/functions';
import { Variable } from '@ustudio-ui/types/css';

import type { ButtonProps } from './button.props';
import Button from './button.component';

const buttonId = 'button';
const getColorVariable = (color: Values<typeof Color>): string => getCssVariable(Variable.Color, color);

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
            ['background-color', getColorVariable(Color.FaintWeakUp)],
            ['color', getColorVariable(Color.FaintStrong)],
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
            ['color', getColorVariable(Color.FaintStrong)],
            ['border', `1px solid ${getColorVariable(Color.FaintWeakUp)}`],
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
            ['color', getColorVariable(Color.FaintStrong)],
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
            ['background-color', getColorVariable(Color.FaintWeakUp)],
            ['color', getColorVariable(Color.FaintStrong)],
            ['cursor', 'not-allowed'],
          ].forEach(([property, value]) => {
            expect(getByTestId(buttonId)).toHaveStyleRule(property, value, modifier);
          });
        });
      });
    });
  });

  const modifier = {
    modifier: ':not(:disabled)',
  };

  describe('not disabled', () => {
    describe('when appearance is contained', () => {
      describe('when intent is accent', () => {
        it('should have contained styles with accent intent', () => {
          const { getByTestId } = renderWithProps({ appearance: 'contained', intent: 'accent' });

          [
            ['background-color', getColorVariable(Color.AccentStrong)],
            ['color', getColorVariable(Color.BaseWeak)],
          ].forEach(([property, value]) => {
            expect(getByTestId(buttonId)).toHaveStyleRule(property, value, modifier);
          });
        });

        describe('when button is active', () => {
          it('should have styles for contained active button', () => {
            const { getByTestId } = renderWithProps({ appearance: 'contained', intent: 'accent' });

            fireEvent.click(getByTestId(buttonId));

            [
              ['background-color', getColorVariable(Color.AccentStrong)],
              ['color', getColorVariable(Color.BaseWeak)],
            ].forEach(([property, value]) => {
              expect(getByTestId(buttonId)).toHaveStyleRule(property, value, modifier);
            });
          });
        });
      });
    });
  });

  describe('when values for props are not provided', () => {
    it('should render button with default styles - contained appearance, base intent, isDisables: false', () => {
      const { getByTestId } = renderWithProps({});

      expect(getByTestId(buttonId)).toHaveStyleRule('color', getColorVariable(Color.BaseWeak), modifier);
      expect(getByTestId(buttonId)).toHaveStyleRule('background-color', getColorVariable(Color.BaseStrong), modifier);
      expect(getByTestId(buttonId).hasAttribute('disabled')).toBe(false);
    });
  });
});
