import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '@brix-ui/utils/functions';
import { useDisabled } from '@brix-ui/contexts/disabled';
import useAriaProps from '@brix-ui/hooks/use-aria-props';
import useEventProps from '@brix-ui/hooks/use-event-props';
import useInputValue from '@brix-ui/hooks/use-input-value';
import { formComponent, refProp, stylableComponent } from '@brix-ui/prop-types/common';

import type { CheckboxProps } from './checkbox.props';
import Styled from './checkbox.styles';

const Checkbox = intrinsicComponent<CheckboxProps, HTMLInputElement>(function Checkbox(
  {
    className,
    value,
    defaultValue,
    onChange,
    name,
    id,
    isDisabled: _isDisabled,
    isRequired,
    isInvalid,
    form,
    containerRef,
    ...props
  },
  ref
) {
  const isDisabled = useDisabled(_isDisabled);

  const [internalValue, handleChange] = useInputValue(
    value === undefined ? defaultValue : value,
    onChange,
    (event) => event.target.checked
  );

  const { propsWithAria, propsWithoutAria } = useAriaProps(props);
  const { propsWithEvents, propsWithoutEvents } = useEventProps(propsWithoutAria);

  return (
    <Styled.Checkbox
      ref={containerRef}
      className={className}
      value={internalValue}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      aria-hidden
      {...propsWithoutEvents}
    >
      <Styled.CheckIcon />

      <Styled.Input
        ref={ref}
        type="checkbox"
        name={name}
        id={id}
        defaultChecked={internalValue}
        aria-checked={internalValue}
        value={internalValue ? 'on' : 'off'}
        onChange={handleChange}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        required={isRequired}
        aria-required={isRequired}
        aria-invalid={isInvalid}
        form={form}
        {...propsWithAria}
        {...propsWithEvents}
      />
    </Styled.Checkbox>
  );
});

Checkbox.propTypes = {
  containerRef: refProp<HTMLLabelElement>(),

  ...formComponent(PT.bool),
  ...stylableComponent(Styled),
};

export default Checkbox;
