import React, { Children, createContext, useContext, useEffect, useMemo, useReducer, WeakValidationMap } from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectKeys, objectValues, orUndefined, tryCall } from '@brix-ui/utils/functions';
import useUpdateEffect from '@brix-ui/hooks/use-update-effect';
import useUpdatedState from '@brix-ui/hooks/use-updated-state';
import type { Values } from '@brix-ui/utils/types';
import { affixable, formComponent, stylableComponent } from '@brix-ui/prop-types/common';

import { TimeMode, Granularity, Time } from './entity';
import { TimePickerDispatcher } from './actions';
import { useFocusControl } from './hooks';
import { TimePickerState, timePickerReducer } from './reducer';

import type { TimePickerProps } from './time-picker.props';
import Styled from './time-picker.styles';

const valueRegExp = /(\d\d)(:(\d\d)(:(\d\d))?)?\s?([AP]M)?/;

const splitValue = (value: string): TimePickerState => {
  const [, hour, , minute, , second] = (value.match(valueRegExp) || []) as [
    full: undefined,
    hour: Time,
    two: undefined,
    minute: Time,
    three: undefined,
    second: Time,
    mode: string
  ];

  return {
    hour,
    minute,
    second,
  };
};

const prependSeparator = (value: Time): string => (value === undefined ? '' : `:${value}`);

const joinValue = ({ hour, minute, second }: TimePickerState): string => {
  return [hour, minute, second].map(prependSeparator).join('').slice(1);
};

interface TimePickerValue
  extends TimePickerState,
    Pick<TimePickerProps, 'isDisabled' | 'isRequired' | 'isInvalid' | 'mode'> {
  dispatcher: TimePickerDispatcher;
  focusOn: Values<typeof Granularity> | undefined;
  passFocus: ReturnType<typeof useFocusControl>['passFocus'];
  resetFocus: ReturnType<typeof useFocusControl>['resetFocus'];
}

const TimePickerContext = createContext<TimePickerValue | undefined>(undefined);

const TimePicker = intrinsicComponent<TimePickerProps, HTMLDivElement>(function TimePicker(
  { children, mode, value, defaultValue, onChange, onModeChange, isDisabled, isRequired, isInvalid, prefix, ...props },
  ref
) {
  const [state, dispatch] = useReducer(timePickerReducer, splitValue(defaultValue ?? ''));

  const dispatcher = useMemo(() => new TimePickerDispatcher(dispatch), []);

  const childrenCount = Children.count(children);

  const [internalMode, setInternalMode] = useUpdatedState(mode);

  useEffect(() => {
    tryCall(onModeChange, internalMode);
  }, [internalMode]);

  useEffect(() => {
    const joinedValue = joinValue(state);

    if (childrenCount * 3 - 1 + Number(Boolean(internalMode)) * 3 === joinedValue.length) {
      tryCall(onChange, joinedValue);
    }
  }, [state]);

  useUpdateEffect(() => {
    const parsedValue = splitValue(value ?? '');

    objectKeys(parsedValue).forEach((granularity) => {
      if (parsedValue[granularity] !== state[granularity]) {
        dispatcher.setTime({
          name: granularity,
          value: parsedValue[granularity],
        });
      }
    });
  }, [value]);

  const { focusOn, passFocus, resetFocus } = useFocusControl([
    Granularity.Hour,
    Granularity.Minute,
    Granularity.Second,
  ]);

  return (
    <Styled.TimePicker
      ref={ref}
      aria-disabled={orUndefined(isDisabled)}
      aria-invalid={orUndefined(isInvalid)}
      {...props}
    >
      {prefix}

      <Styled.InputsContainer>
        <TimePickerContext.Provider
          value={{
            ...state,
            dispatcher,
            focusOn,
            passFocus,
            resetFocus,
            mode: internalMode,
            isDisabled,
            isRequired,
            isInvalid,
          }}
        >
          {Children.map(children, (child, index) => {
            return (
              <>
                {child}

                {index !== childrenCount - 1 && <Styled.Divider>:</Styled.Divider>}
              </>
            );
          })}
        </TimePickerContext.Provider>
      </Styled.InputsContainer>

      {mode && (
        <Styled.ModeSwitch
          type="button"
          role="switch"
          aria-checked
          id="time-mode"
          appearance="faint"
          isDisabled={isDisabled}
          onClick={() => {
            setInternalMode((prevMode) => {
              return prevMode === TimeMode.AM ? TimeMode.PM : TimeMode.AM;
            });
          }}
        >
          <Styled.Mode variant="h5">{internalMode}</Styled.Mode>
        </Styled.ModeSwitch>
      )}
    </Styled.TimePicker>
  );
});

TimePicker.propTypes = {
  mode: PT.oneOf(objectValues(TimeMode)),
  onModeChange: PT.func,

  prefix: affixable.prefix,
  ...formComponent(PT.string),
  ...stylableComponent(Styled),
} as WeakValidationMap<TimePickerProps>;

export default TimePicker;

export const useTimePicker = (): TimePickerValue => {
  const context = useContext(TimePickerContext);

  if (context === undefined) {
    throw new ReferenceError('Use TimePicker inside its context.');
  }

  return context;
};
