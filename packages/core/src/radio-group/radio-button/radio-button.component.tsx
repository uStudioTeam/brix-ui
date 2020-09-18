import { refProp, stylableComponent } from '@ustudio-ui/prop-types/common';
import React, { LabelHTMLAttributes, useEffect } from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '@ustudio-ui/utils/functions';

import { useAriaProps } from '../../_internal/hooks';
import { useRadioGroup } from '../radio-group.context';

import type { RadioButtonProps } from './radio-button.props';
import Styled from './radio-button.styles';

const RadioButton = intrinsicComponent<RadioButtonProps, HTMLInputElement>(function RadioButton(
  { className, value, id, containerRef, ...props },
  ref
) {
  const { value: selectedOption, name, dispatcher, handleChange, isDisabled, isRequired, isInvalid } = useRadioGroup();

  useEffect(() => {
    dispatcher.addOption(value);

    return () => dispatcher.removeOption(value);
  }, [value]);

  const { propsWithAria, propsWithoutAria } = useAriaProps(props);

  return (
    <Styled.RadioButton
      ref={containerRef}
      value={selectedOption === value}
      className={className}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      aria-hidden
      {...(propsWithoutAria as LabelHTMLAttributes<HTMLLabelElement>)}
    >
      <Styled.Input
        ref={ref}
        type="checkbox"
        id={id}
        name={name}
        onChange={(event) => handleChange(value, event)}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        required={isRequired}
        aria-required={isRequired}
        aria-invalid={isInvalid}
        {...propsWithAria}
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
