import { getTextVariant } from '../../utils';
import styled, { css } from 'styled-components';
import { Mixin } from '../../theme';

const Tabs = styled.ul.withConfig({ displayName: 'Tabs' })(
  ({ dataOffset, tabsQuantity }) => css`
    ${Mixin.Style.borderAll({ color: 'var(--c-light)' })};
    position: relative;
    width: 100%;

    display: flex;
    align-items: stretch;
    flex-wrap: wrap;

    border-radius: var(--border-radius);
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: ${dataOffset}%;
      z-index: 1;

      height: 100%;
      width: ${tabsQuantity}%;

      background-image: var(--g-primary);

      transition: left var(--transition);
    }
  `
);

const TabContainer = styled.li.withConfig({ displayName: 'TabContainer' })`
  display: flex;
  flex: 1;
`;

const Tab = styled.button.withConfig({ displayName: 'Tab' })(
  ({ isActive, variant }) => css`
    ${getTextVariant({ variant })};
    ${Mixin.Style.inputPadding()};

    position: relative;

    flex: 1;
    text-align: center;

    color: var(--c-darkest);
    transition: var(--transition);

    user-select: none;

    ${Mixin.Device.mobile(css`
      &:active {
        color: var(--c-primary);
      }
    `)}

    ${Mixin.Device.desktop(css`
      &:hover,
      &:focus {
        color: var(--c-primary);
      }

      &:active {
        color: var(--c-light);
      }
    `)}

    &[disabled] {
      color: var(--c-neutral);
      cursor: not-allowed;

      &:hover {
        color: var(--c-neutral);
      }

      &:active,
      &:focus {
        pointer-events: none;
      }

      &:before {
        background-color: var(--c-light);
      }
    }

    &:before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      z-index: 0;

      width: 100%;
      height: 100%;

      background-color: var(--c-lightest);
      transition: background-color var(--transition);
    }

    ${isActive
      ? css`
          &:not([disabled]) {
            color: var(--c-lightest);
          }
        `
      : ''}
  `
);

const TabContent = styled.span.withConfig({ displayName: 'TabContent' })`
  position: relative;
  z-index: 3;
`;

export const Styled = { Tabs, TabContainer, Tab, TabContent };
