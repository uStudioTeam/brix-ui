import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import { classNames, inputProps } from '../../../utils';

import { useKeyPressClose } from '../../../hooks';
import { getItemsArray } from '../select.module';

import { StyledSelect as Styled } from '../styles';

export const BaseSelect = forwardRef(function BaseSelect(
  {
    query,
    emptyListMessage,
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
    styled,
    classNames,
    className,
  },
  ref
) {
  const [isOpen, setOpen] = useState(false);

  useKeyPressClose(setOpen);

  const itemsArray = getItemsArray({ items, groups, query });

  const renderItems = () => {
    return itemsArray.length ? (
      itemsArray.map((item) => (
        <li key={item.value}>
          <Styled.ValuesListItem
            type="button"
            selected={isItemSelected(item)}
            disabled={item.isDisabled || item.isDefault}
            onClick={() => handleValueClick({ setOpen, item })}
            $classNames={classNames}
            tabIndex={isOpen ? 0 : -1}
            $styled={styled}
          >
            <Styled.ValuesListText
              variant="span"
              classNames={{ Text: classNames?.ValuesListText || '' }}
              $styled={styled}
            >
              {item.label}
            </Styled.ValuesListText>

            <Styled.ValuesListIcon
              name="check"
              classNames={{ Icon: classNames?.ValuesListIcon || '' }}
              $styled={styled}
            />
          </Styled.ValuesListItem>
        </li>
      ))
    ) : (
      <Styled.EmptyListMessage variant="small" color="var(--c-neutral)">
        {emptyListMessage}
      </Styled.EmptyListMessage>
    );
  };

  return (
    <Styled.SelectContainer
      className={className}
      $classNames={classNames}
      isOpen={isOpen}
      isDisabled={isDisabled}
      $styled={styled}
    >
      {isOpen && <Styled.Overlay $classNames={classNames} onClick={() => setOpen(false)} $styled={styled} />}

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
        {itemsArray.map((item) => (
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
          onClick: (event) => handleSelectClick({ isOpen, setOpen, event }),
          classNames,
        },
        icon: (
          <Styled.SelectIcon
            name="caret"
            angle={isOpen && !isDisabled ? 0 : -180}
            size="medium"
            isDisabled={isDisabled}
            classNames={{ Icon: classNames?.SelectIcon || '' }}
            $styled={styled}
          />
        ),
      })}

      <Styled.Dropdown
        query={query}
        items={itemsArray}
        groups={!!groups}
        isOpen={isOpen}
        $classNames={classNames}
        $styled={styled}
      >
        {items && (
          <Styled.ValuesList $classNames={classNames} $styled={styled}>
            {renderItems()}
          </Styled.ValuesList>
        )}

        {groups && (
          <div>
            {groups.map((group) => (
              <Styled.ValuesList key={group.title} $classNames={classNames} $styled={styled}>
                <Styled.ValuesListTitle $classNames={classNames} $styled={styled}>
                  {group.title}
                </Styled.ValuesListTitle>

                {renderItems()}
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
  autocomplete: PropTypes.bool,
  emptyListMessage: PropTypes.string,
  ...classNames(Object.keys(classes)),
});

const defaultProps = {
  placeholder: '',
  isDisabled: false,
  isRequired: false,
  autocomplete: false,
  emptyListMessage: 'Nothing was found',
};

export const props = { valueType, propTypes, defaultProps };
