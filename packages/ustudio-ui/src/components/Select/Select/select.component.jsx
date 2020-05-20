import React, { forwardRef, useState, useEffect } from 'react';

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
    placeholder,
    isDisabled,
    isRequired,
    autocomplete,
    emptyListMessage,
    styled,
    classNames,
    className,
  },
  ref
) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (value) {
      setQuery('');
    }
  }, [value]);

  return (
    <BaseSelect
      query={query}
      emptyListMessage={emptyListMessage}
      isItemSelected={(item) => value === item.value}
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
        <Styled.Select role="button" $styled={styled} {...props}>
          {autocomplete && <Styled.Autocomplete value={query} onChange={({ target: { value } }) => setQuery(value)} />}

          {getItemsObject({ items, groups, query })?.[value ?? defaultValue]?.label || placeholder}

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
