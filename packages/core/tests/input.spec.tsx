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

const change = <V extends string | number>(value: V, element: HTMLInputElement): void => {
  fireEvent.change(element, { target: { value } });
};

describe('<Input />', () => {
  matchMedia();

  describe('uncontrolled state', () => {
    beforeEach(() => {
      getValue = ({ target: { value } }) => value;
    });

    it('should update local value without external props', () => {
      const { getByTestId } = renderWithProps();
      const input = getByTestId(inputId) as HTMLInputElement;

      change('123', input);

      expect(input.value).toBe('123');
    });
  });

  describe('controlled state', () => {
    beforeEach(() => {
      getValue = ({ target: { value } }) => value;
    });

    it('should set value according to the passed prop', () => {
      const { getByTestId } = renderWithProps({
        value: '123',
      });
      const input = getByTestId(inputId) as HTMLInputElement;

      expect(input.value).toBe('123');
    });
  });

  describe('onChange', () => {
    beforeEach(() => {
      getValue = ({ target: { value } }) => value;
    });

    it('should call `onChange` whenever the value changes', () => {
      const onChange = jest.fn();
      const { getByTestId } = renderWithProps({
        onChange,
      });
      const input = getByTestId(inputId) as HTMLInputElement;

      change('123', input);

      expect(onChange).toHaveBeenCalledWith('123', expect.any(Object));
    });
  });
});
