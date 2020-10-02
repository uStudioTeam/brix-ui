import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import 'jest-styled-components';

import ThemeProvider from '@brix-ui/theme';
import { matchMedia } from '@brix-ui/utils/tests';

import Checkbox, { CheckboxProps } from '../src/checkbox';
import Switch, { SwitchProps } from '../src/switch';

describe('<Switch /> & <Checkbox />', () => {
  const createSuite = ({
    name,
    testId,
    component,
  }: {
    name: string;
    testId: string;
    component: typeof Checkbox | typeof Switch;
  }): void => {
    const fixture = (props = {} as Partial<CheckboxProps | SwitchProps>) => {
      return (
        <ThemeProvider>
          {React.createElement(component, {
            ...props,
            // `data-testid` is preset in JSX, not in `ComponentType`
            // @ts-ignore
            'data-testid': testId,
          })}
        </ThemeProvider>
      );
    };

    const renderWithProps = (props = {} as Partial<CheckboxProps | SwitchProps>) => {
      return render(fixture(props));
    };

    const toggle = (element: HTMLInputElement | null): void => {
      fireEvent.click(element as HTMLInputElement);
    };

    describe(name, () => {
      beforeEach(() => {
        matchMedia();
      });

      describe('when uncontrolled', () => {
        it('should internally control value change', async () => {
          const { getByTestId } = renderWithProps();

          const input = getByTestId(testId).querySelector('input') as HTMLInputElement;

          toggle(input);

          await waitFor(() => {
            expect(input.getAttribute('value')).toBe('on');
            expect(input.getAttribute('checked')).toBe('');
          });

          toggle(input);

          await waitFor(() => {
            expect(input.getAttribute('value')).toBe('off');
            expect(input.getAttribute('checked')).toBe(null);
          });
        });

        it('should call `onChange` when value changes', async () => {
          const onChange = jest.fn();

          const { getByTestId } = renderWithProps({
            onChange,
          });

          const input = getByTestId(testId).querySelector('input') as HTMLInputElement;

          toggle(input);

          await waitFor(() => {
            expect(onChange).toHaveBeenCalledWith(true, expect.any(Object));
          });

          toggle(input);

          await waitFor(() => {
            expect(onChange).toHaveBeenCalledWith(false, expect.any(Object));
          });
        });
      });

      describe('when controlled', () => {
        it('should handle value change whenever `value` prop changes', async () => {
          const { getByTestId, rerender } = renderWithProps();

          const input = getByTestId(testId).querySelector('input') as HTMLInputElement;

          rerender(
            fixture({
              value: true,
            })
          );

          await waitFor(() => {
            expect(input.getAttribute('value')).toBe('on');
            expect(input.getAttribute('checked')).toBe('');
          });

          rerender(
            fixture({
              value: false,
            })
          );

          await waitFor(() => {
            expect(input.getAttribute('value')).toBe('off');
            expect(input.getAttribute('checked')).toBe(null);
          });
        });

        it('should not call `onChange` whenever value changes', async () => {
          const onChange = jest.fn();

          const { rerender } = renderWithProps({
            onChange,
          });

          rerender(
            fixture({
              value: true,
            })
          );

          await waitFor(() => {
            expect(onChange).not.toHaveBeenCalled();
          });
        });
      });
    });
  };

  ([
    {
      name: '<Switch />',
      testId: 'switchId',
      component: Switch,
    },
    {
      name: '<Checkbox />',
      testId: 'checkboxId',
      component: Checkbox,
    },
  ] as Parameters<typeof createSuite>[0][]).forEach(createSuite);
});
