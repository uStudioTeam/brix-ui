import { css } from 'styled-components';
import { sc } from '../../../utils';

import Icon from '../../internal/Icon';

import { Mixin } from '../../../theme';
import { inject } from './select.inject';

const SelectContainer = sc('div')(
  ({ isOpen, isDisabled }) => css`
    ${Mixin.Style.borderWithBottom({ colorAll: 'var(--c-neutral)', colorBottom: 'rgba(255, 255, 255, 0)' })};

    width: 100%;

    position: relative;
    z-index: ${inject.containerLayer(isOpen)};

    border-radius: var(--border-radius);
    background-color: var(--c-lightest);

    box-shadow: ${inject.containerShadow({ isOpen, isDisabled })};
    user-select: none;

    transition: var(--transition);

    ${inject.containerDisabledStyles({ isDisabled, Dropdown })};

    select {
      width: 0;
      height: 0;
      opacity: 0;
      overflow: hidden;
      pointer-events: none;
      user-select: none;
      display: none;
    }
  `
)('SelectContainer');

const Overlay = sc('button')(css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  opacity: 0;
  cursor: default;
`)('Overlay');

const Select = sc('button')(
  ({ disabled, selected }) => css`
    ${Mixin.Font.bodyRegular()};
    ${Mixin.Style.inputPadding()};

    padding-bottom: 4px;
    padding-right: calc(var(--i-medium) * 2 + 10px);

    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    min-height: 31px;
    position: relative;
    z-index: 900;

    color: ${inject.toggleColor({ selected })};

    transition: var(--transition);

    ${inject.selectDisabledStyles(disabled)};
  `
)('Select');

const SelectIcon = sc(Icon)(
  ({ isDisabled }) => css`
    position: absolute;
    right: var(--i-medium);
    top: 10px;

    color: ${inject.selectIconColor(isDisabled)};

    transition: var(--transition);
    transition-delay: var(--transition);
    transition-property: transform;
  `
)('SelectIcon');

const SelectedList = sc('ul')(css`
  display: flex;
  flex-wrap: wrap;

  margin: -4px;
`)('SelectedList');

const SelectedListItem = sc('li')(
  ({ isDisabled }) => css`
    ${Mixin.Font.bodySmall()};

    display: flex;
    justify-content: center;
    align-items: center;

    margin: var(--i-small);

    border-radius: var(--border-radius);
    background: var(--g-primary);

    color: var(--c-lightest);

    transition: var(--transition);

    ${inject.selectedItemDisabledStyles({ isDisabled, SelectedListIcon })}
  `
)('SelectedListItem');

const SelectedListLabel = sc('span')(css`
  padding: 2px var(--i-medium);
`)('SelectedListLabel');

const SelectedListIcon = sc('button')(css`
  padding: 5px 6px 4px;

  transition: var(--transition);

  &:focus,
  &:active {
    background-color: var(--c-primary-light);
  }
`)('SelectedListIcon');

const Dropdown = sc('div')(
  ({ groups, items, isOpen }) => css`
    ${Mixin.Style.borderAll({ color: 'var(--c-neutral)' })};

    position: absolute;
    top: 100%;
    left: -1px;
    z-index: 800;

    overflow: hidden;

    width: calc(100% + 2px);

    display: flex;
    flex-direction: column;
    background-color: var(--c-lightest);

    border-top-color: rgba(255, 255, 255, 0);
    border-radius: 0 0 var(--border-radius) var(--border-radius);

    transition: var(--transition);

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 3;

      width: 100%;
      height: 1px;

      background-color: var(--c-primary);

      transform: ${inject.dropdownScale(isOpen)};
      transform-origin: left;

      transition: transform var(--transition);
      transition-delay: ${isOpen ? 'var(--transition)' : 0};
    }

    ${inject.dropdownToggleStyles({ isOpen, ValuesList }, { items, groups })}
  `
)('Dropdown');

const ValuesList = sc('ul')(css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: scroll;
  transition: var(--transition);
`)('ValuesList');

const ValuesListTitle = sc('li')(css`
  ${Mixin.Font.caption()};
  ${Mixin.Style.inputPadding()};

  color: var(--c-dark);

  width: 100%;
  border-top: 1px solid var(--c-light);
  border-bottom: 1px solid var(--c-light);
`)('ValuesListTitle');

const ValuesListItem = sc('button')(
  ({ selected }) => css`
    ${Mixin.Font.bodyRegular()};
    ${Mixin.Style.inputPadding()};

    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    color: ${inject.toggleColor({ selected, selectedColor: 'var(--c-primary)', unselectedColor: 'var(--c-darkest)' })};
    cursor: pointer;
    transition: var(--transition);

    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: var(--border-radius);
      background: var(--g-primary), var(--c-primary-light);
      opacity: 0;
      pointer-events: none;
      transition: var(--transition);
    }

    ${Mixin.Device.mobile(css`
      &:active {
        color: var(--c-dark);

        &:not([disabled]) ${ValuesListIcon} {
          color: var(--c-dark);
        }
      }
    `)}

    ${Mixin.Device.desktop(css`
      &:hover,
      &:focus {
        ${inject.valuesItemDesktopToggleStyles({ selected, ValuesListIcon })};
      }

      &:active {
        &:not([disabled]) ${ValuesListIcon} {
          color: var(--c-dark);
        }
      }
    `)}

    &:not([disabled]) ${ValuesListIcon} {
      color: ${inject.toggleColor({
        selected,
        selectedColor: 'var(--c-primary)',
        unselectedColor: 'rgba(255, 255, 255, 0)',
      })};
    }

    &[disabled] {
      color: var(--c-neutral);
      cursor: not-allowed;

      ${ValuesListIcon} {
        color: ${inject.toggleColor({ selected, unselectedColor: 'rgba(255, 255, 255, 0)' })};
      }

      &:hover,
      &:active,
      &:focus {
        color: var(--c-neutral);
      }

      &:active,
      &:focus {
        &:not([disabled]) ${ValuesListIcon} {
          color: var(--c-neutral);
        }
      }
    }
  `
)('ValuesListItem');

const ValuesListText = sc('span')(css`
  position: relative;
`)('ValuesListText');

const ValuesListIcon = sc(Icon)(css`
  margin-left: 1rem;

  transition: var(--transition);
`)('ValuesListIcon');

export const StyledSelect = {
  SelectContainer,
  Overlay,
  Select,
  SelectIcon,
  Dropdown,
  ValuesList,
  ValuesListTitle,
  ValuesListItem,
  ValuesListText,
  ValuesListIcon,
};

export const StyledMultiSelect = {
  ...StyledSelect,
  SelectedList,
  SelectedListItem,
  SelectedListLabel,
  SelectedListIcon,
};
