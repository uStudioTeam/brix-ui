import { css } from 'styled-components';
import { Mixin } from '../../../theme';

const _getDropdownHeight = ({ items, groups, query }) => {
  const getLength = () => {
    if (query && !items.length) {
      return 0.9;
    }
    
    return items.length > 5 ? 5 : items?.length;
  };
  
  const length = getLength();

  return groups ? 32 * length - 7 : 32 * length + 2;
};

const toggleColor = ({ selected, selectedColor = 'var(--c-darkest)', unselectedColor = 'var(--c-neutral)' }) =>
  selected ? selectedColor : unselectedColor;

// Container

const containerLayer = (isOpen) => (isOpen ? 'var(--l-bottom)' : 1);

const containerShadow = ({ isOpen, isDisabled }) => (isOpen && !isDisabled ? 'var(--s-light)' : 'none');

const containerDisabledStyles = ({ isDisabled, Dropdown }) => {
  return isDisabled
    ? css`
        background-color: var(--c-light);

        ${Dropdown} {
          background-color: var(--c-light);
        }

        border-color: rgba(255, 255, 255, 0);

        ${Dropdown} {
          border-color: rgba(255, 255, 255, 0);
        }

        ${Mixin.Device.mobile(css`
          &:active {
            box-shadow: none;
          }
        `)}

        ${Mixin.Device.desktop(css`
          &:hover,
          &:focus-within {
            box-shadow: none;
          }
        `)}
      `
    : css`
        background-color: var(--c-lightest);

        ${Mixin.Device.mobile(css`
          &:active {
            box-shadow: var(--s-light);

            &,
            ${Dropdown} {
              border-color: var(--c-light);
            }
          }
        `)}

        ${Mixin.Device.desktop(css`
          &:hover,
          &:focus-within {
            box-shadow: var(--s-light);

            &,
            ${Dropdown} {
              border-color: var(--c-light);
            }

            ${Dropdown} {
              border-top-color: rgba(255, 255, 255, 0);
            }
          }
        `)}
      `;
};

// Select

const selectDisabledStyles = (disabled) => {
  return disabled
    ? css`
        color: var(--c-neutral);
        cursor: not-allowed;
        background-color: var(--c-light);
      `
    : css`
        background-color: var(--c-lightest);
      `;
};

// Select Icon

const selectIconColor = (isDisabled) => (isDisabled ? 'var(--c-neutral)' : 'var(--c-primary)');

// Selected List Item

const selectedItemDisabledStyles = ({ isDisabled, SelectedListIcon }) => {
  return isDisabled
    ? css`
        background: var(--c-light);
        color: var(--c-neutral);

        cursor: not-allowed;

        &:hover,
        &:active {
          box-shadow: none;
          cursor: not-allowed;

          ${SelectedListIcon} {
            background-color: rgba(255, 255, 255, 0);
          }
        }

        ${SelectedListIcon} {
          cursor: not-allowed;
        }
      `
    : css`
        ${Mixin.Device.mobile(css`
          &:active {
            box-shadow: var(--s-primary);

            ${SelectedListIcon} {
              background-color: var(--c-primary-light);
            }
          }
        `)}

        ${Mixin.Device.desktop(css`
          &:hover {
            box-shadow: var(--s-primary);
            cursor: pointer;

            ${SelectedListIcon} {
              background-color: var(--c-primary-light);
            }
          }
        `)}
      `;
};

// Dropdown

const dropdownScale = (isOpen) => `scaleX(${isOpen ? 1 : 0})`;

const dropdownToggleStyles = ({ isOpen, query, ValuesList }, { items, groups }) => {
  const component = groups ? 'div' : ValuesList;

  return isOpen
    ? css`
        ${component}, & {
          height: ${_getDropdownHeight({ items, groups, query })}px;
          overflow-x: hidden;
        }
      `
    : css`
        ${component}, & {
          height: 0;
        }
      `;
};

// Values List Item

const valuesItemDesktopToggleStyles = ({ selected, ValuesListIcon }) => {
  return selected
    ? css`
        &:not([disabled]) {
          color: var(--c-lightest);

          &:before {
            opacity: 0.3;
          }

          ${ValuesListIcon} {
            color: var(--c-lightest);
          }
        }
      `
    : css`
        :not([disabled]) {
          color: var(--c-darkest);

          &:before {
            opacity: 0.3;
          }
        }
      `;
};

export const inject = {
  containerLayer,
  containerShadow,
  containerDisabledStyles,
  toggleColor,
  selectDisabledStyles,
  selectIconColor,
  selectedItemDisabledStyles,
  dropdownScale,
  dropdownToggleStyles,
  valuesItemDesktopToggleStyles,
};
