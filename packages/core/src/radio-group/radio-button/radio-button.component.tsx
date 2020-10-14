import React, { useEffect } from 'react';
import PT from 'prop-types';

import { intrinsicComponent, orUndefined } from '@brix-ui/utils/functions';
import useAriaProps from '@brix-ui/hooks/use-aria-props';
import useEventProps from '@brix-ui/hooks/use-event-props';
import { refProp, stylableComponent } from '@brix-ui/prop-types/common';

import { useRadioGroup } from '../radio-group.context';

import type { RadioButtonProps } from './radio-button.props';
import Styled from './radio-button.styles';

const RadioButton = intrinsicComponent<RadioButtonProps, HTMLInputElement>(function RadioButton(
  { value, id, form, containerRef, ...props },
  ref
) {
  const { value: selectedOption, name, dispatcher, handleChange, isDisabled, isRequired, isInvalid } = useRadioGroup();

  useEffect(() => {
    dispatcher.addOption(value);

    return () => dispatcher.removeOption(value);
  }, [value]);

  const { propsWithAria, propsWithoutAria } = useAriaProps(props);
  const { propsWithEvents, propsWithoutEvents } = useEventProps(propsWithoutAria);

  return (
    <Styled.RadioButton
      ref={containerRef}
      className="radio-button"
      aria-checked={selectedOption === value}
      aria-disabled={orUndefined(isDisabled)}
      aria-invalid={orUndefined(isInvalid)}
      aria-hidden
      {...propsWithoutEvents}
    >
      <Styled.Input
        ref={ref}
        type="checkbox"
        id={id}
        name={name}
        onChange={(event) => handleChange(value, event)}
        disabled={isDisabled}
        aria-disabled={orUndefined(isDisabled)}
        required={isRequired}
        aria-required={orUndefined(isRequired)}
        aria-invalid={orUndefined(isInvalid)}
        form={form}
        {...propsWithAria}
        {...propsWithEvents}
      />
    </Styled.RadioButton>
  );
});

RadioButton.propTypes = {
  value: PT.string.isRequired,
  containerRef: refProp<HTMLLabelElement>(),

  ...stylableComponent(),
};

export default RadioButton;
