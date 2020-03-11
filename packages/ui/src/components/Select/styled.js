import Icon from '../internal/Icon';
import styled, { css } from 'styled-components';
import { Mixin } from '../../theme';

function getDropdownHeight(items, groups) {
  function cutLength() {
    return items.length > 5 ? 5 : items?.length;
  }

  return groups ? 32 * cutLength() - 7 : 32 * cutLength() + 2;
}

const Container = styled.div.withConfig({ displayName: 'SelectContainer' })(
  ({ isOpen, isDisabled }) => css`
    width: 100%;

    position: relative;
    z-index: ${isOpen ? 'var(--l-bottom)' : 1};

    ${Mixin.Style.borderWithBottom({ colorAll: 'var(--c-neutral)', colorBottom: 'transparent' })};

    border-radius: var(--border-radius);
    background-color: var(--c-lightest);
    box-shadow: none;
    user-select: none;

    transition: var(--transition);

    ${isOpen && !isDisabled
      ? css`
          box-shadow: var(--s-light);
        `
      : ''};

    ${isDisabled
      ? css`
          background-color: var(--c-light);

          ${Dropdown} {
            background-color: var(--c-light);
          }

          border-color: transparent;

          ${Dropdown} {
            border-color: transparent;
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
                border-top-color: transparent;
              }
            }
          `)}
        `};

    & select {
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

const Overlay = styled.button.withConfig({ displayName: 'SelectCoOverlay' })`
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

const Select = styled.button.withConfig({ displayName: 'Select' })(
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

    color: ${selected ? 'var(--c-darkest)' : 'var(--c-neutral)'};

    transition: var(--transition);

    ${disabled
      ? css`
          color: var(--c-neutral);
          cursor: not-allowed;
          background-color: var(--c-light);
        `
      : css`
          background-color: var(--c-lightest);
        `}
  `
);

const SelectIcon = styled(Icon).withConfig({ displayName: 'SelectIcon' })(
  ({ isDisabled }) => css`
    margin-left: var(--i-regular);
    margin-top: 2px;

    color: ${isDisabled ? 'var(--c-neutral)' : 'var(--c-primary)'};

    transition: var(--transition);
    transition-delay: var(--transition);
    transition-property: transform;
  `
);

const SelectedList = styled.ul.withConfig({ displayName: 'SelectList' })`
  display: flex;
  flex-wrap: wrap;

  margin: -4px;
`;

const SelectedListItem = styled.li.withConfig({ displayName: 'SelectListItem' })(
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

    ${isDisabled
      ? css`
          background: var(--c-light);
          color: var(--c-neutral);

          cursor: not-allowed;

          &:hover,
          &:active {
            box-shadow: none;
            cursor: not-allowed;

            ${SelectedListIcon} {
              background-color: transparent;
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
        `}
  `
);

const SelectedListLabel = styled.span.withConfig({ displayName: 'SelectedListLabel' })`
  padding: 2px var(--i-medium);
`;

const SelectedListIcon = styled.button.withConfig({ displayName: 'SelectedListIcon' })`
  padding: 5px 6px 4px;

  transition: var(--transition);

  &:focus,
  &:active {
    background-color: var(--c-primary-light);
  }
`;

const Dropdown = styled.div.withConfig({ displayName: 'SelectDropdown' })(
  ({ groups, items, isOpen }) => css`
    position: absolute;
    top: 100%;
    left: -1px;
    z-index: 800;

    overflow: hidden;

    width: calc(100% + 2px);

    display: flex;
    flex-direction: column;
    background-color: var(--c-lightest);

    ${Mixin.Style.borderAll({ color: 'var(--c-neutral)' })};
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

      transform: scaleX(${isOpen ? 1 : 0});
      transform-origin: left;
      transition: transform var(--transition);
      transition-delay: ${isOpen ? 'var(--transition)' : 0};
    }

    ${isOpen
      ? css`
          ${ValuesList}, & {
            height: ${getDropdownHeight(items, groups)}px;
            overflow-x: hidden;
          }
        `
      : css`
          ${ValuesList}, & {
            height: 0;
            transition-delay: var(--transition);
          }
        `}
  `
);

const ValuesList = styled.ul.withConfig({ displayName: 'SelectValuesList' })`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: scroll;
  transition: var(--transition);
`;

const ValuesListTitle = styled.li.withConfig({ displayName: 'SelectValuesListTitle' })`
  ${Mixin.Font.caption()};
  ${Mixin.Style.inputPadding()};

  color: var(--c-dark);

  width: 100%;
  border-top: 1px solid var(--c-light);
  border-bottom: 1px solid var(--c-light);
`;

const ValuesListItem = styled.button.withConfig({ displayName: 'SelectValuesListItem' })(
  ({ selected }) => css`
    ${Mixin.Font.bodyRegular()};
    ${Mixin.Style.inputPadding()};

    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    color: ${selected ? 'var(--c-primary)' : 'var(--c-darkest)'};
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
        ${selected
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
            `};
      }

      &:active {
        &:not([disabled]) ${ValuesListIcon} {
          color: var(--c-dark);
        }
      }
    `)}

    &:not([disabled]) ${ValuesListIcon} {
      color: ${selected ? 'var(--c-primary)' : 'transparent'};
    }

    &[disabled] {
      color: var(--c-neutral);
      cursor: not-allowed;

      ${ValuesListIcon} {
        color: ${selected ? 'var(--c-neutral)' : 'transparent'};
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

const ValuesListText = styled.span.withConfig({ displayName: 'SelectValuesListText' })`
  position: relative;
`;

const ValuesListIcon = styled(Icon).withConfig({ displayName: 'SelectValuesListIcon' })`
  margin-left: 1rem;

  transition: var(--transition);
`;

export const StyledSelect = {
  Container,
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
