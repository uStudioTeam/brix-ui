import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../internal/Icon';

import { getItemsObject } from '../select.module';

import { StyledMultiSelect as Styled } from '../styles';
import { BaseSelect, props } from '../BaseSelect';

const MultiSelect = forwardRef(function MultiSelect(
  {
    id,
    name,
    items,
    groups,
    value,
    defaultValue,
    onChange,
    placeholder,
    isDisabled,
    isRequired,
    styled,
    classNames,
    className,
  },
  ref
) {
  const isItemSelected = item => value?.includes(item.value);

  const handleItemSelect = item => {
    onChange && onChange([...(value ?? []), item.value]);
  };

  const handleItemRemove = item => {
    const values = value.filter(selectedValue => selectedValue !== item.value);

    onChange && onChange((values.length ? values : undefined)?.filter(item => values?.includes(item)));
  };

  return (
    <BaseSelect
      selected={!!(value ?? defaultValue)?.length}
      isItemSelected={isItemSelected}
      handleSelectClick={({ isOpen, setOpen, event }) => {
        event.preventDefault();
        !isDisabled && setOpen(!isOpen);
      }}
      handleValueClick={({ item }) => (isItemSelected(item) ? handleItemRemove(item) : handleItemSelect(item))}
      multiple
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
          {(value ?? defaultValue)?.length ? (
            <Styled.SelectedList $classNames={classNames} $styled={styled}>
              {(value ?? defaultValue)
                .sort((itemA, itemB) => {
                  if (items?.[itemA].isDefault) {
                    return -1;
                  }

                  if (items?.[itemB].isDefault) {
                    return 1;
                  }

                  return 0;
                })
                .map(_item => {
                  const item = getItemsObject({ items, groups })[_item];

                  return (
                    <Styled.SelectedListItem
                      key={item.value}
                      isDisabled={isDisabled || item?.isDisabled || item?.isDefault}
                      $classNames={classNames}
                      $styled={styled}
                    >
                      <Styled.SelectedListLabel $classNames={classNames} $styled={styled}>
                        {item.label}
                      </Styled.SelectedListLabel>

                      {!item.isDefault && (
                        <Styled.SelectedListIcon
                          onClick={event => {
                            event.stopPropagation();
                            !item.isDisabled && !isDisabled && handleItemRemove(item);
                          }}
                          $classNames={classNames}
                          $styled={styled}
                          disabled={item.isDisabled || isDisabled}
                        >
                          <Icon name="close" />
                        </Styled.SelectedListIcon>
                      )}
                    </Styled.SelectedListItem>
                  );
                })}
            </Styled.SelectedList>
          ) : (
            placeholder
          )}

          {icon}
        </Styled.Select>
      )}
    />
  );
});

MultiSelect.displayName = 'MultiSelect';

MultiSelect.propTypes = props.propTypes({ valueType: PropTypes.arrayOf(props.valueType), classes: Styled });

MultiSelect.defaultProps = props.defaultProps;

export default MultiSelect;
