import { refProp, stylableComponent } from '@brix-ui/prop-types/common';
import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '@brix-ui/utils/functions';

import { useAriaProps, useValue } from '../_internal/hooks';

import Styled from './checkbox.styles';
import type { CheckboxProps } from './checkbox.props';

const Checkbox = intrinsicComponent<CheckboxProps, HTMLInputElement>(function Checkbox(
  {
    styles,
    className,
    value,
    defaultValue,
    onChange,
    name,
    id,
    isDisabled,
    isRequired,
    isInvalid,
    containerRef,
    ...props
  },
  ref
) {
  const [internalValue, handleChange] = useValue(
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
  isDisabled: PT.bool,
  isRequired: PT.bool,
  isInvalid: PT.bool,

  containerRef: refProp<HTMLLabelElement>(),

  ...stylableComponent(Styled),
};

export default Checkbox;
