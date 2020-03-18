import styled, { css } from 'styled-components';

import { StyledComponents } from '../../../utils/styles/styled-component';

import Icon from '../../internal/Icon';

import { Mixin } from '../../../theme';
import { inject } from './inject';

const SelectContainer = styled.div(
  ({ isOpen, isDisabled }) => css`
    ${Mixin.Style.borderWithBottom({ colorAll: 'var(--c-neutral)', colorBottom: 'transparent' })};

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
);

const Overlay = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  opacity: 0;
  cursor: default;
`;

const Select = styled.button(
  ({ disabled, selected }) => css`
    ${Mixin.Font.bodyRegular()};
    ${Mixin.Style.inputPadding()};

    padding-bottom: 4px;

    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    position: relative;
    z-index: 900;

    color: ${inject.toggleColor({ selected })};

    transition: var(--transition);

    ${inject.selectDisabledStyles(disabled)};
  `
);

const SelectIcon = styled(Icon)(
  ({ isDisabled }) => css`
    margin-left: var(--i-regular);
    margin-top: 2px;

    color: ${inject.selectIconColor(isDisabled)};

    transition: var(--transition);
    transition-delay: var(--transition);
    transition-property: transform;
  `
);

const SelectedList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin: -4px;
`;

const SelectedListItem = styled.li(
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
);

const SelectedListLabel = styled.span`
  padding: 2px var(--i-medium);
`;

const SelectedListIcon = styled.button`
  padding: 5px 6px 4px;

  transition: var(--transition);

  &:focus,
  &:active {
    background-color: var(--c-primary-light);
  }
`;

const Dropdown = styled.div(
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

    border-top-color: transparent;
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
);

const ValuesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: scroll;
  transition: var(--transition);
`;

const ValuesListTitle = styled.li`
  ${Mixin.Font.caption()};
  ${Mixin.Style.inputPadding()};

  color: var(--c-dark);

  width: 100%;
  border-top: 1px solid var(--c-light);
  border-bottom: 1px solid var(--c-light);
`;

const ValuesListItem = styled.button(
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
      color: ${inject.toggleColor({ selected, selectedColor: 'var(--c-primary)', unselectedColor: 'transparent' })};
    }

    &[disabled] {
      color: var(--c-neutral);
      cursor: not-allowed;

      ${ValuesListIcon} {
        color: ${inject.toggleColor({ selected, unselectedColor: 'transparent' })};
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
);

const ValuesListText = styled.span`
  position: relative;
`;

const ValuesListIcon = styled(Icon)`
  margin-left: 1rem;

  transition: var(--transition);
`;

export const StyledSelect = StyledComponents({
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
});

export const StyledMultiSelect = StyledComponents({
         Select,
         SelectedList,
         SelectedListItem,
         SelectedListLabel,
         SelectedListIcon,
       });