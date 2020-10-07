import React, { FC, useRef } from 'react';
import { render, fireEvent, waitFor, RenderResult } from '@testing-library/react';
import { renderHook, act, RenderHookResult } from '@testing-library/react-hooks';

import { matchMedia } from '@brix-ui/utils/tests';
import ThemeProvider from '@brix-ui/theme';

import { useFocusControl, useFocusPass } from '../src/time-picker/hooks';
import { useTimePicker } from '../src/time-picker/time-picker.component';
import TimePicker, { TimePickerProps } from '../src/time-picker';
import TimeInput, { TimeInputProps } from '../src/time-picker/time-input';
import TimeSelect, { TimeSelectProps } from '../src/time-picker/time-select';

const fireKeyDown = <E extends HTMLElement>(element: E, key: string, shift?: boolean): void => {
  fireEvent.keyDown(element, { key, shiftKey: shift });
};

const fireFocus = <E extends HTMLElement>(element: E) => {
  fireEvent.focus(element);
};

const fireChange = <E extends HTMLElement>(element: E, value: string) => {
  fireEvent.change(element, { target: { value } });
};

describe('useFocusPass', () => {
  const fixtureId = 'fixture';

  const Fixture: FC<{ focusOn?: string; value?: string; passFocus?(): void; resetFocus?(): void; onBlur?(): void }> = ({
    focusOn,
    value,
    passFocus = () => {},
    resetFocus = () => {},
    onBlur,
  }) => {
    const ref = useRef<HTMLDivElement>(null);

    const { handleKeyDown, handleFocus, keyPressCount } = useFocusPass({
      value,
      name: fixtureId,
      ref,
      focusOn,
      passFocus,
      resetFocus,
    });

    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        ref={ref}
        data-testid={fixtureId}
        data-key-press-count={keyPressCount}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={onBlur}
      />
    );
  };

  describe('counting key presses', () => {
    describe('when key is not numeric', () => {
      it('should not count', () => {
        const { getByTestId } = render(<Fixture />);
        const fixture = getByTestId(fixtureId);

        fireKeyDown(fixture, 'Escape');

        expect(fixture.dataset.keyPressCount).toBe('0');
      });
    });

    describe('when key is numeric', () => {
      let result: RenderResult;
      let fixture: HTMLElement;
      const passFocus = jest.fn();

      beforeEach(() => {
        result = render(<Fixture passFocus={passFocus} />);
        fixture = result.getByTestId(fixtureId);
      });

      describe('when count is below 2', () => {
        it('should count', async () => {
          fireKeyDown(fixture, '1');
          result.rerender(<Fixture passFocus={passFocus} />);

          await waitFor(() => {
            expect(fixture.dataset.keyPressCount).toBe('1');
          });
        });
      });

      describe('when count is 2', () => {
        describe('when value is still undefined', () => {
          it('should not pass focus and not reset count', async () => {
            fireKeyDown(fixture, '1');
            result.rerender(<Fixture passFocus={passFocus} />);

            fireKeyDown(fixture, '1');
            result.rerender(<Fixture passFocus={passFocus} />);

            await waitFor(() => {
              expect(fixture.dataset.keyPressCount).toBe('2');
            });
            expect(passFocus).not.toHaveBeenCalled();
          });
        });

        describe('when value is not undefined', () => {
          it('should pass focus to the next element and reset count', async () => {
            fireKeyDown(fixture, '1');
            result.rerender(<Fixture passFocus={passFocus} value="01" />);

            fireKeyDown(fixture, '1');
            result.rerender(<Fixture passFocus={passFocus} focusOn="notFixture" />);

            await waitFor(() => {
              expect(passFocus).toHaveBeenCalledWith(1);
            });
            result.rerender(<Fixture passFocus={passFocus} focusOn="notFixture" />);

            expect(fixture.dataset.keyPressCount).toBe('0');
          });
        });
      });
    });
  });

  describe('moving focus', () => {
    describe('passing focus', () => {
      let result: RenderResult;
      let fixture: HTMLElement;
      const passFocus = jest.fn();

      beforeEach(() => {
        result = render(<Fixture passFocus={passFocus} />);
        fixture = result.getByTestId(fixtureId);
      });

      describe('when `Tab` is pressed', () => {
        describe('when `Shift` is pressed', () => {
          it('should pass focus to the element before current', () => {
            fireKeyDown(fixture, 'Tab', true);

            expect(passFocus).toHaveBeenCalledWith(-1);
          });
        });

        describe('when `Shift is not pressed`', () => {
          it('should pass focus to the element after current', () => {
            fireKeyDown(fixture, 'Tab', false);

            expect(passFocus).toHaveBeenCalledWith(1);
          });
        });
      });

      describe('when `Enter` or `ArrowRight` are pressed', () => {
        it('should pass focus to the element after current', () => {
          fireKeyDown(fixture, 'Enter');

          expect(passFocus).toHaveBeenCalledWith(1);

          fireKeyDown(fixture, 'ArrowRight');

          expect(passFocus).toHaveBeenCalledWith(1);
        });
      });

      describe('when `ArrowLeft` is pressed', () => {
        it('should pass focus to the element before current', () => {
          fireKeyDown(fixture, 'ArrowLeft');

          expect(passFocus).toHaveBeenCalledWith(-1);
        });
      });
    });

    describe('resetting focus', () => {
      describe('when `Escape is pressed`', () => {
        it('should reset focus', () => {
          const resetFocus = jest.fn();
          const { getByTestId } = render(<Fixture resetFocus={resetFocus} />);

          fireKeyDown(getByTestId(fixtureId), 'Escape');

          expect(resetFocus).toHaveBeenCalled();
        });
      });
    });

    describe('when focusing on this element', () => {
      it("should set focus value on this element's name", () => {
        const passFocus = jest.fn();
        const { getByTestId } = render(<Fixture passFocus={passFocus} />);

        fireFocus(getByTestId(fixtureId));

        expect(passFocus).toHaveBeenCalledWith(fixtureId);
      });
    });
  });
});

describe('useFocusControl', () => {
  const focusOrder = ['1', '2', '3'];

  const renderFocusControl = () => renderHook(() => useFocusControl(focusOrder));

  describe('passing focus', () => {
    let hook: RenderHookResult<unknown, ReturnType<typeof useFocusControl>>;

    beforeEach(() => {
      hook = renderFocusControl();
    });

    describe('when called with a name of an element', () => {
      it('should set focus to this element', () => {
        act(() => {
          hook.result.current.passFocus('2');
        });

        expect(hook.result.current.focusOn).toBe('2');
      });
    });

    describe('when called with a number', () => {
      describe('when number is -1', () => {
        describe('when previous focus value is the first element in the order', () => {
          it('should reset focus', () => {
            act(() => {
              hook.result.current.passFocus('1');
              hook.result.current.passFocus(-1);
            });

            expect(hook.result.current.focusOn).toBe(undefined);
          });
        });

        describe('when previous focus value is not the first element in the order', () => {
          it('should pass focus to the previous element in the order', () => {
            act(() => {
              hook.result.current.passFocus('2');
              hook.result.current.passFocus(-1);
            });

            expect(hook.result.current.focusOn).toBe('1');
          });
        });
      });

      describe('when number is 1', () => {
        describe('when previous focus value is the last element in the order', () => {
          it('should reset focus', () => {
            act(() => {
              hook.result.current.passFocus('3');
              hook.result.current.passFocus(1);
            });

            expect(hook.result.current.focusOn).toBe(undefined);
          });
        });

        describe('when previous focus value is not the last element in the order', () => {
          it('should pass focus to the next element in the order', () => {
            act(() => {
              hook.result.current.passFocus('2');
              hook.result.current.passFocus(1);
            });

            expect(hook.result.current.focusOn).toBe('3');
          });
        });
      });
    });
  });

  describe('resetting focus', () => {
    describe('when `resetFocus` is called', () => {
      it('should set focus to `undefined`', () => {
        const { result } = renderFocusControl();

        act(() => {
          result.current.passFocus('1');
          result.current.resetFocus();
        });

        expect(result.current.focusOn).toBe(undefined);
      });
    });
  });
});

describe('<TimeInput />', () => {
  beforeEach(() => {
    matchMedia();
  });

  const timeInputId = 'time-input';

  const renderWithProps = (props: TimeInputProps, pickerProps = {} as TimePickerProps) => {
    return render(<TimeInput data-testid={timeInputId} {...props} />, {
      wrapper: ({ children }) => {
        return (
          <ThemeProvider>
            <TimePicker {...pickerProps}>{children}</TimePicker>
          </ThemeProvider>
        );
      },
    });
  };

  describe('`min` value', () => {
    it('should be 0 by default', () => {
      const { getByTestId } = renderWithProps({ name: 'hour' });

      const input = getByTestId(timeInputId).querySelector('input') as HTMLInputElement;

      expect(input.getAttribute('min')).toBe('0');
    });

    describe('when specified in props', () => {
      it('should use value from props', () => {
        const { getByTestId } = renderWithProps({ name: 'hour', min: 15 });

        const input = getByTestId(timeInputId).querySelector('input') as HTMLInputElement;

        expect(input.getAttribute('min')).toBe('15');
      });
    });
  });

  describe('`max` value', () => {
    describe('when name is `hour`', () => {
      describe('when mode is undefined', () => {
        it('should be 24 by default', () => {
          const { getByTestId } = renderWithProps({ name: 'hour' });

          const input = getByTestId(timeInputId).querySelector('input') as HTMLInputElement;

          expect(input.getAttribute('max')).toBe('24');
        });
      });

      describe('when mode is `AM`', () => {
        it('should be 12 by default', () => {
          const { getByTestId } = renderWithProps({ name: 'hour' }, { mode: 'AM' });

          const input = getByTestId(timeInputId).querySelector('input') as HTMLInputElement;

          expect(input.getAttribute('max')).toBe('12');
        });
      });

      describe('when mode is `PM`', () => {
        it('should be 12 by default', () => {
          const { getByTestId } = renderWithProps({ name: 'hour' }, { mode: 'PM' });

          const input = getByTestId(timeInputId).querySelector('input') as HTMLInputElement;

          expect(input.getAttribute('max')).toBe('12');
        });
      });
    });

    describe('when name is `minute`', () => {
      it('should be 59 by default', () => {
        const { getByTestId } = renderWithProps({ name: 'minute' });

        const input = getByTestId(timeInputId).querySelector('input') as HTMLInputElement;

        expect(input.getAttribute('max')).toBe('59');
      });
    });

    describe('when name is `second`', () => {
      it('should be 59 by default', () => {
        const { getByTestId } = renderWithProps({ name: 'second' });

        const input = getByTestId(timeInputId).querySelector('input') as HTMLInputElement;

        expect(input.getAttribute('max')).toBe('59');
      });
    });

    describe('when specified in props', () => {
      it('should use value from props', () => {
        const { getByTestId } = renderWithProps({ name: 'hour', max: 15 });

        const input = getByTestId(timeInputId).querySelector('input') as HTMLInputElement;

        expect(input.getAttribute('max')).toBe('15');
      });
    });
  });

  describe('value constraint', () => {
    describe('when value does not satisfy the constraint', () => {
      it('should transform value to be fit', async () => {
        const onChange = jest.fn();

        const { getByTestId } = renderWithProps({ name: 'hour' }, { onChange });
        const input = getByTestId(timeInputId).querySelector('input') as HTMLInputElement;

        fireChange(input, '25');

        await waitFor(() => {
          expect(onChange).toHaveBeenCalledWith('24');
        });
      });
    });
  });
});

describe('<TimeSelect />', () => {
  beforeEach(() => {
    matchMedia();
  });

  const timeSelectId = 'time-select';

  const renderWithProps = (props: TimeSelectProps, pickerProps = {} as TimePickerProps) => {
    return render(<TimeSelect data-testid={timeSelectId} {...props} />, {
      wrapper: ({ children }) => {
        return (
          <ThemeProvider>
            <TimePicker {...pickerProps}>{children}</TimePicker>
          </ThemeProvider>
        );
      },
    });
  };

  describe('prepopulating options', () => {
    describe('when name is `hour`', () => {
      describe('when `mode` is not specified', () => {
        it('should render 25 options including placeholder', () => {
          const { getByTestId } = renderWithProps({ name: 'hour' });

          const options = getByTestId(timeSelectId).querySelectorAll('option');

          expect(options.length).toBe(25);
        });
      });

      describe('when `mode` is `AM`', () => {
        it('should should render 13 options including placeholder', () => {
          const { getByTestId } = renderWithProps({ name: 'hour' }, { mode: 'AM' });

          const options = getByTestId(timeSelectId).querySelectorAll('option');

          expect(options.length).toBe(13);
        });
      });

      describe('when `mode` is `PM`', () => {
        it('should should render 13 options including placeholder', () => {
          const { getByTestId } = renderWithProps({ name: 'hour' }, { mode: 'PM' });

          const options = getByTestId(timeSelectId).querySelectorAll('option');

          expect(options.length).toBe(13);
        });
      });
    });

    ['minute', 'second'].forEach((granularity) => {
      describe(`when name is \`${granularity}\``, () => {
        it('should render 61 options including placeholder', () => {
          const { getByTestId } = renderWithProps({ name: granularity as 'minute' | 'second' });

          const options = getByTestId(timeSelectId).querySelectorAll('option');

          expect(options.length).toBe(61);
        });
      });
    });
  });

  describe('formatting options', () => {
    describe('when `mode` is specified and `name` is `hour`', () => {
      it('should assign a label for each option with its value and lowercased mode', () => {
        const { getByTestId } = renderWithProps({ name: 'hour' }, { mode: 'AM' });

        const options = getByTestId(timeSelectId).querySelectorAll('option[label$="am"]');

        expect(options.length).toBe(12);
      });
    });
  });
});

describe('<TimePicker />', () => {
  beforeEach(() => {
    matchMedia();

    jest.spyOn(React.Children, 'count').mockReturnValue(3);
  });

  const renderWithProps = (props = {} as TimePickerProps) => {
    return renderHook(useTimePicker, {
      wrapper: ({ children }) => {
        return (
          <ThemeProvider>
            <TimePicker {...props}>{children}</TimePicker>
          </ThemeProvider>
        );
      },
    });
  };

  describe('defaultValue', () => {
    it('should format and apply `defaultValue`', async () => {
      const { result, waitFor } = renderWithProps({
        defaultValue: '12:28:54 AM',
        mode: 'AM',
      });

      const { hour, minute, second } = result.current;

      await waitFor(() => {
        expect(hour).toBe('12');
        expect(minute).toBe('28');
        expect(second).toBe('54');
      });
    });
  });

  describe('onModeChange', () => {
    it('should call `onModeChange` whenever the mode changes', async () => {
      const onModeChange = jest.fn();

      const { rerender } = render(
        <ThemeProvider>
          <TimePicker onModeChange={onModeChange} mode="AM" />
        </ThemeProvider>
      );

      rerender(
        <ThemeProvider>
          <TimePicker mode="PM" />
        </ThemeProvider>
      );

      await waitFor(() => {
        expect(onModeChange).toHaveBeenCalledWith('PM');
      });
    });
  });

  describe('value change', () => {
    let hook: RenderHookResult<TimePickerProps, ReturnType<typeof useTimePicker>>;
    let setTime: jest.SpyInstance;
    const onChange = jest.fn();

    beforeEach(() => {
      hook = renderWithProps({
        defaultValue: '12:28:54',
        onChange,
      });

      setTime = jest.spyOn(hook.result.current.dispatcher, 'setTime');

      act(() => {
        hook.result.current.dispatcher.setTime({
          name: 'second',
          value: '55',
        });
      });
    });

    it('should dispatch only changed parts of the value string', async () => {
      await hook.waitFor(() => {
        expect(setTime).toHaveBeenCalledTimes(1);
        expect(setTime).toHaveBeenCalledWith({
          name: 'second',
          value: '55',
        });
      });
    });

    describe('when value corresponds to the number of children', () => {
      it('should call `onChange` whenever the value changes', async () => {
        await hook.waitFor(() => {
          expect(onChange).toHaveBeenCalledWith('12:28:55');
        });
      });
    });

    describe('when parts of desired value are undefined', () => {
      it('should not call `onChange`', () => {
        onChange.mockClear();

        act(() => {
          hook.result.current.dispatcher.setTime({
            name: 'second',
            value: undefined,
          });
        });

        expect(onChange).not.toHaveBeenCalled();
      });
    });
  });

  describe('dividers rendering', () => {
    it('should render divider after each child except for the last one', () => {
      const { container } = render(
        <TimePicker>
          <div />
          <div />
          <div />
        </TimePicker>,
        {
          wrapper: ThemeProvider,
        }
      );

      const dividers = container.querySelectorAll('div + span');

      expect(dividers.length).toBe(2);
      expect(container.querySelector('div > div > div:last-child + span')).toBe(null);
    });
  });
});
