import React, { forwardRef } from 'react';

import { getItemsObject } from '../select.module';

import { StyledSelect as Styled } from '../styles';
import { BaseSelect, props } from '../BaseSelect';

const Select = forwardRef(function Select(
  {
    id,
    name,
    value,
    defaultValue,
    onChange,
    items,
    groups,
    placeholder = '',
    isDisabled = false,
    isRequired = false,
    styled,
    classNames,
    className,
  },
  ref
) {
  return (
    <BaseSelect
      isItemSelected={item => value === item.value}
      selected={!!(value ?? defaultValue)}
      handleSelectClick={({ isOpen, setOpen }) => setOpen(!isOpen)}
      handleValueClick={({ setOpen, item }) => {
        onChange && onChange(item.value);
        setOpen(false);
      }}
      id={id}
      name={name}
      items={items}
      groups={groups}
      isDisabled={isDisabled}
      isRequired={isRequired}
      styled={styled}
      classNames={classNames}
      className={className}
      ref={ref}
      renderSelect={({ props, icon }) => (
        <Styled.Select type="button" $styled={styled} {...props}>
          {getItemsObject({ items, groups })[value ?? defaultValue]?.label || placeholder}

          {icon}
        </Styled.Select>
      )}
    />
  );
});

Select.displayName = 'Select';

Select.propTypes = props.propTypes({ valueType: props.valueType, classes: Styled });

Select.defaultProps = props.defaultProps;

export default Select;
