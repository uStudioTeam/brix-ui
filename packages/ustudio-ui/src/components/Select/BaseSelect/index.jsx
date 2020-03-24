import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import { classNames, inputProps } from '../../../utils';

import { useKeyPressClose } from '../../../hooks';
import { selectUtils } from '../utils';

import { StyledSelect as Styled } from '../styles';

const BaseSelect = forwardRef(function BaseSelect(
  {
    isItemSelected,
    handleSelectClick,
    handleValueClick,
    multiple = false,
    selected,
    renderSelect,

    id,
    name,
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

  useKeyPressClose(setOpen);

  const itemsArray = selectUtils.getItemsArray({ items, groups });

  const renderItems = itemsToRender => {
    return Object.values(itemsToRender).map(item => (
      <li key={item.value}>
        <Styled.ValuesListItem
          type="button"
          selected={isItemSelected(item)}
          disabled={item.isDisabled || item.isDefault}
          onClick={() => handleValueClick({ setOpen, item })}
          classNames={classNames}
          tabIndex={isOpen ? 0 : -1}
        >
          <Styled.ValuesListText variant="span" classNames={{ Text: classNames?.ValuesListText || '' }}>
            {item.label}
          </Styled.ValuesListText>

          <Styled.ValuesListIcon name="check" classNames={{ Icon: classNames?.ValuesListIcon || '' }} />
        </Styled.ValuesListItem>
      </li>
    ));
  };

  return (
    <Styled.SelectContainer className={className} classNames={classNames} isOpen={isOpen} isDisabled={isDisabled}>
      {isOpen && <Styled.Overlay classNames={classNames} onClick={() => setOpen(false)} />}

      <select
        id={id}
        name={name}
        disabled={isDisabled}
        required={isRequired}
        aria-disabled={isDisabled}
        aria-required={isRequired}
        ref={ref}
        multiple={multiple}
      >
        {itemsArray.map(item => (
          <option value={item.value} disabled={item.isDisabled} key={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      {renderSelect({
        props: {
          disabled: isDisabled,
          'aria-disabled': isDisabled,
          selected: selected,
          onClick: event => handleSelectClick({ isOpen, setOpen, event }),
          classNames,
        },
        icon: (
          <Styled.SelectIcon
            name="caret"
            angle={isOpen && !isDisabled ? 0 : -180}
            size="medium"
            isDisabled={isDisabled}
            classNames={{ Icon: classNames?.SelectIcon || '' }}
          />
        ),
      })}

      <Styled.Dropdown items={itemsArray} groups={!!groups} isOpen={isOpen} classNames={classNames}>
        {items && <Styled.ValuesList classNames={classNames}>{renderItems(items)}</Styled.ValuesList>}

        {groups && (
          <div>
            {groups.map(group => (
              <Styled.ValuesList key={group.title} classNames={classNames}>
                <Styled.ValuesListTitle classNames={classNames}>{group.title}</Styled.ValuesListTitle>

                {renderItems(group.items)}
              </Styled.ValuesList>
            ))}
          </div>
        )}
      </Styled.Dropdown>
    </Styled.SelectContainer>
  );
});

const valueType = PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]);
const itemsType = PropTypes.objectOf(
  PropTypes.exact({
    value: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]).isRequired,
    label: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    isDefault: PropTypes.bool,
  })
);

const propTypes = ({ valueType, classes }) => ({
  ...inputProps(valueType),
  items: itemsType,
  groups: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      items: itemsType.isRequired,
    })
  ),
  placeholder: PropTypes.string,
  ...classNames(Object.keys(classes)),
});

const defaultProps = {
  isDisabled: false,
  isRequired: false,
};

const props = { valueType, propTypes, defaultProps };

export { BaseSelect, props };
