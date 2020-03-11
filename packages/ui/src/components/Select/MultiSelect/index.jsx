import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../internal/Icon';

import { classNames, inputProps } from '../../../utils';
import { useKeyPressClose } from '../../../hooks';

import { getItemsArray, getItemsMap } from '../utils';

import { StyledMultiSelect as Styled } from '../styled';

const MultiSelect = forwardRef(function MultiSelect(
  {
    label,
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
  const [isOpen, setOpen] = useState(false);

  function isItemSelected(item) {
    return value?.includes(item.value);
  }

  function handleItemSelect(item) {
    onChange && onChange([...(value ?? []), item.value]);
  }

  function handleItemRemove(item) {
    const values = value.filter(selectedValue => selectedValue !== item.value);

    onChange && onChange((values.length ? values : undefined)?.filter(item => values?.includes(item)));
  }

  function renderItems(itemsToRender) {
    return Object.values(itemsToRender).map(item => (
      <li key={item.value}>
        <Styled.ValuesListItem
          type="button"
          selected={isItemSelected(item)}
          disabled={item.isDisabled || item.isDefault}
          onClick={() => {
            isItemSelected(item) ? handleItemRemove(item) : handleItemSelect(item);
          }}
          className={classNames?.ValuesListItem || ''}
          tabIndex={isOpen ? 0 : -1}
        >
          <Styled.ValuesListText>{item.label}</Styled.ValuesListText>

          <Styled.ValuesListIcon name="check" classNames={{ Icon: classNames?.ValuesListIcon || '' }} />
        </Styled.ValuesListItem>
      </li>
    ));
  }

  useKeyPressClose(setOpen);

  return (
    <Styled.Container
      className={`${classNames?.Container || ''} ${className || ''}`}
      isOpen={isOpen}
      isDisabled={isDisabled}
    >
      {isOpen && <Styled.Overlay onClick={() => setOpen(false)} />}

      <select
        name={label}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        required={isRequired}
        aria-required={isRequired}
        ref={ref}
        multiple
        size={getItemsArray({ items, groups }).length}
      >
        {getItemsArray({ items, groups }).map(item => (
          <option value={item.value} disabled={item.isDisabled} key={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      <Styled.Select
        as="div"
        role="button"
        aria-disabled={isDisabled}
        disabled={isDisabled}
        selected={!!(value ?? defaultValue)?.length}
        onClick={event => {
          event.preventDefault();
          !isDisabled && setOpen(!isOpen);
        }}
        className={classNames?.Select || ''}
      >
        {(value ?? defaultValue)?.length ? (
          <Styled.SelectedList className={classNames?.SelectedList || ''}>
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
                const item = getItemsMap({ items, groups })[_item];

                return (
                  <Styled.SelectedListItem
                    key={item.value}
                    isDisabled={isDisabled || item?.isDisabled || item?.isDefault}
                    className={classNames?.SelectedListItem || ''}
                  >
                    <Styled.SelectedListLabel className={classNames?.SelectedListLabel || ''}>
                      {item.label}
                    </Styled.SelectedListLabel>

                    {!item.isDefault && (
                      <Styled.SelectedListIcon
                        onClick={event => {
                          event.stopPropagation();
                          !item.isDisabled && !isDisabled && handleItemRemove(item);
                        }}
                        className={classNames?.SelectedListIcon || ''}
                      >
                        <Icon name="times" />
                      </Styled.SelectedListIcon>
                    )}
                  </Styled.SelectedListItem>
                );
              })}
          </Styled.SelectedList>
        ) : (
          label
        )}

        <Styled.SelectIcon
          name="caret"
          angle={isOpen && !isDisabled ? 0 : -180}
          size="medium"
          isDisabled={isDisabled}
          classNames={{ Icon: classNames?.SelectIcon || '' }}
        />
      </Styled.Select>

      <Styled.Dropdown
        items={getItemsArray({ items, groups })}
        groups={!!groups}
        isOpen={isOpen}
        className={classNames?.Dropdown || ''}
      >
        {items && <Styled.ValuesList className={classNames?.ValuesList || ''}>{renderItems(items)}</Styled.ValuesList>}

        {groups && (
          <div>
            {groups.map(group => (
              <Styled.ValuesList key={group.title} className={classNames?.ValuesList || ''}>
                <Styled.ValuesListTitle className={classNames?.ValuesListTitle || ''}>
                  {group.title}
                </Styled.ValuesListTitle>

                {renderItems(group.items)}
              </Styled.ValuesList>
            ))}
          </div>
        )}
      </Styled.Dropdown>
    </Styled.Container>
  );
});

MultiSelect.displayName = 'MultiSelect';

MultiSelect.propTypes = {
  ...inputProps(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]))),
  items: PropTypes.objectOf(
    PropTypes.exact({
      value: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]).isRequired,
      label: PropTypes.string.isRequired,
      isDisabled: PropTypes.bool,
      isDefault: PropTypes.bool,
    })
  ),
  groups: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      items: PropTypes.objectOf(
        PropTypes.exact({
          value: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]).isRequired,
          label: PropTypes.string.isRequired,
          isDisabled: PropTypes.bool,
          isDefault: PropTypes.bool,
        })
      ).isRequired,
    })
  ),
  ...classNames(Object.keys(Styled)),
};

MultiSelect.defaultProps = {
  isDisabled: false,
  isRequired: false,
};

export default MultiSelect;
