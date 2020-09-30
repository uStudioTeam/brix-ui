import React, { HTMLAttributes, WeakValidationMap } from 'react';
import PT from 'prop-types';

import { extract } from '@brix-ui/prop-types/utils';
import { applyPolymorphicFunctionProp, intrinsicComponent } from '@brix-ui/utils/functions';
import { useDisabled } from '@brix-ui/contexts/disabled';
import useAriaProps from '@brix-ui/hooks/use-aria-props';
import useInputValue from '@brix-ui/hooks/use-input-value';

import Checkbox from '../checkbox';

import type { SwitchProps } from './switch.props';
import Styled from './switch.styles';

const Switch = intrinsicComponent<SwitchProps, HTMLInputElement>(function Switch(
  {
    children,
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
    <Styled.Switch
      ref={containerRef}
      className={className}
      value={internalValue}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      aria-hidden
      {...(propsWithoutAria as HTMLAttributes<HTMLLabelElement>)}
    >
      {children && (
        <Styled.Children value={internalValue} isDisabled={isDisabled} isInvalid={isInvalid}>
          {applyPolymorphicFunctionProp(children, { value: internalValue, isDisabled, isInvalid })}
        </Styled.Children>
      )}

      <Styled.Input
        ref={ref}
        type="checkbox"
        role="switch"
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
    </Styled.Switch>
  );
});

const { styles: _styles, ...checkboxPropTypes } = extract([Checkbox]);

Switch.propTypes = {
  children: PT.oneOfType([PT.func, PT.node]),

  background: PT.func,
  color: PT.func,

  ...checkboxPropTypes,
} as WeakValidationMap<SwitchProps>;

export default Switch;
