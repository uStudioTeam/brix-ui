import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../internal/Icon';

import { selectUtils } from '../utils';

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
    isDisabled = false,
    isRequired = false,
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
      classNames={classNames}
      className={className}
      ref={ref}
      renderSelect={({ props, icon }) => (
        <Styled.Select as="div" role="button" {...props}>
          {(value ?? defaultValue)?.length ? (
            <Styled.SelectedList classNames={classNames}>
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
                  const item = selectUtils.getItemsObject({ items, groups })[_item];

                  return (
                    <Styled.SelectedListItem
                      key={item.value}
                      isDisabled={isDisabled || item?.isDisabled || item?.isDefault}
                      classNames={classNames}
                    >
                      <Styled.SelectedListLabel classNames={classNames}>{item.label}</Styled.SelectedListLabel>

                      {!item.isDefault && (
                        <Styled.SelectedListIcon
                          onClick={event => {
                            event.stopPropagation();
                            !item.isDisabled && !isDisabled && handleItemRemove(item);
                          }}
                          classNames={classNames}
                          disabled={item.isDisabled || isDisabled}
                        >
                          <Icon name="times" />
                        </Styled.SelectedListIcon>
                      )}
                    </Styled.SelectedListItem>
                  );
                })}
            </Styled.SelectedList>
          ) : (
            ''
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
