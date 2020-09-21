import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import ThemeProvider from '@brix-ui/theme';
import { matchMedia } from '@brix-ui/utils/tests';

import Select, { SelectProps } from '../src/select';

const selectId = 'select';

const renderWithProps = (props = {} as Partial<SelectProps> & Pick<SelectProps, 'options'>) => {
  return render(
    <ThemeProvider>
      <Select data-testid={selectId} suffix="suffix" {...props} />
    </ThemeProvider>
  );
};

const getSelect = (container: HTMLElement): HTMLSelectElement => {
  return container.querySelector('select') as HTMLSelectElement;
};

describe('<Select />', () => {
  matchMedia();

  describe('disabledOptions', () => {
    it('should disable options with specified values', () => {
      const { getByTestId } = renderWithProps({
        options: [
          {
            value: 'A',
          },
          {
            value: 'B',
          },
        ],
        disabledOptions: ['A'],
      });

      const select = getSelect(getByTestId(selectId));

      expect(select.querySelector('option[value="A"]')?.getAttribute('aria-disabled')).toBe('true');
      expect(select.querySelector('option[value="B"]')?.getAttribute('aria-disabled')).toBe(null);
    });
  });

  describe('disabledGroups', () => {
    it('should disable groups of options by specified index', () => {
      const { getByTestId } = renderWithProps({
        options: [
          {
            label: 'one',
            options: [
              {
                value: 'A',
              },
            ],
          },
          {
            label: 'two',
            options: [
              {
                value: 'B',
              },
            ],
          },
        ],
        disabledGroups: [0],
      });

      const select = getSelect(getByTestId(selectId));

      ['optgroup[label="one"]', 'option[value="A"]'].forEach((selector) => {
        expect(select.querySelector(selector)?.getAttribute('aria-disabled')).toBe('true');
      });

      ['optgroup[label="two"]', 'option[value="B"]'].forEach((selector) => {
        expect(select.querySelector(selector)?.getAttribute('aria-disabled')).toBe(null);
      });
    });
  });

  describe('placeholder', () => {
    describe('when `placeholder` is specified', () => {
      it('should render disabled selected option on top of the list', () => {
        const { getByTestId } = renderWithProps({
          placeholder: 'placeholder',
          options: [
            {
              value: 'A',
            },
          ],
        });

        const select = getSelect(getByTestId(selectId));

        expect(select.querySelectorAll('option').length).toBe(2);

        ['aria-disabled', 'aria-selected'].forEach((attribute) => {
          expect(select.querySelectorAll('option').item(0).getAttribute(attribute)).toBe('true');
        });

        expect(select.querySelectorAll('option').item(0).getAttribute('value')).toBe('placeholder');
      });
    });
  });
});
