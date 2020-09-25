import React, { ChangeEvent } from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import ThemeProvider from '@brix-ui/theme';
import { matchMedia } from '@brix-ui/utils/tests';

import Input, { InputProps } from '../src/_internal/input';

const inputId = 'input';

let getValue: (event: ChangeEvent<HTMLInputElement>) => string | number;

const renderWithProps = <V extends string | number>(props: Partial<InputProps<V>> = {} as Partial<InputProps<V>>) => {
  return render(
    <ThemeProvider>
      <Input type="text" inputProps={{}} getValue={getValue} data-testid={inputId} {...props} />
    </ThemeProvider>
  );
};

const change = <V extends string | number>(value: V, element: HTMLLabelElement): void => {
  fireEvent.change(element.querySelector('input') as HTMLInputElement, { target: { value } });
};

describe('<Input />', () => {
  matchMedia();

  beforeEach(() => {
    getValue = ({ target: { value } }) => value;
  });

  describe('uncontrolled state', () => {
    it('should update local value without external props', () => {
      const { getByTestId } = renderWithProps();
      const label = getByTestId(inputId) as HTMLLabelElement;
      const input = label.querySelector('input') as HTMLInputElement;

      change('123', label);

      expect(input.value).toBe('123');
    });
  });

  describe('controlled state', () => {
    it('should set value according to the passed prop', () => {
      const { getByTestId } = renderWithProps({
        value: '123',
      });
      const input = getByTestId(inputId).querySelector('input') as HTMLInputElement;

      expect(input.value).toBe('123');
    });
  });

  describe('onChange', () => {
    it('should call `onChange` whenever the value changes', () => {
      const onChange = jest.fn();
      const { getByTestId } = renderWithProps({
        onChange,
      });
      const label = getByTestId(inputId) as HTMLLabelElement;

      change('123', label);

      expect(onChange).toHaveBeenCalledWith('123', expect.any(Object));
    });
  });
});
