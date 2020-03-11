import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import { classNames, inputProps } from '../../../utils';

import { useKeyPressClose } from '../../../hooks';
import { getItemsArray, getItemsMap } from '../utils';

import { StyledSelect as Styled } from '../styled';

const Select = forwardRef(function Select(
  {
    label,
    value,
    defaultValue,
    onChange,
    items,
    groups,
    isDisabled = false,
    isRequired = false,
    classNames,
    className,
  },
  ref
) {
  const [isOpen, setOpen] = useState(false);

  function isItemSelected(item) {
    return value === item.value;
  }

  function renderItems(itemsToRender) {
    return Object.values(itemsToRender).map(item => (
      <li key={item.value}>
        <Styled.ValuesListItem
          type="button"
          selected={isItemSelected(item)}
          disabled={item.isDisabled || item.isDefault}
          onClick={() => {
            onChange && onChange(item.value);
            setOpen(false);
          }}
          className={classNames?.ValuesListItem || ''}
          tabIndex={isOpen ? 0 : -1}
        >
          <Styled.ValuesListText variant="span">{item.label}</Styled.ValuesListText>

          {<Styled.ValuesListIcon name="check" classNames={{ Icon: classNames?.ValuesListIcon || '' }} />}
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
        id={label}
        disabled={isDisabled}
        required={isRequired}
        aria-disabled={isDisabled}
        aria-required={isRequired}
        ref={ref}
      >
        {getItemsArray({ items, groups }).map(item => (
          <option value={item.value} disabled={item.isDisabled} key={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      <Styled.Select
        type="button"
        disabled={isDisabled}
        aria-disabled={isDisabled}
        selected={!!(value ?? defaultValue)}
        onClick={() => setOpen(!isOpen)}
        className={classNames?.Select || ''}
      >
        {getItemsMap({ items, groups })[value ?? defaultValue]?.label || label}

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

Select.displayName = 'Select';

Select.propTypes = {
  ...inputProps(PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])),
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

Select.defaultProps = {
  isDisabled: false,
  isRequired: false,
};

export default Select;
