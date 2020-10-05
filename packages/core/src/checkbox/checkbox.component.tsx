import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '@brix-ui/utils/functions';
import { useDisabled } from '@brix-ui/contexts/disabled';
import useAriaProps from '@brix-ui/hooks/use-aria-props';
import useInputValue from '@brix-ui/hooks/use-input-value';
import { formComponent, refProp, stylableComponent } from '@brix-ui/prop-types/common';

import type { CheckboxProps } from './checkbox.props';
import Styled from './checkbox.styles';

const Checkbox = intrinsicComponent<CheckboxProps, HTMLInputElement>(function Checkbox(
  {
    styles,
    className,
    value,
    defaultValue,
    onChange,
    name,
    id,
    isDisabled: _isDisabled,
    isRequired,
    isInvalid,
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

  return (
    <Styled.Checkbox
      ref={containerRef}
      as={styles?.Checkbox}
      className={className}
      value={internalValue}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      aria-hidden
      {...propsWithoutAria}
    >
      <Styled.CheckIcon as={styles?.CheckIcon} />

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
        {...propsWithAria}
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
