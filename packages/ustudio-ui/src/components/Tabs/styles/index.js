import { css } from 'styled-components';

import { getTextVariant, sc } from '../../../utils';
import { Mixin } from '../../../theme';

import { inject } from './inject';

const TabContainer = sc('li')(css`
  display: flex;
  flex: 1;
`)('TabContainer');

const Tabs = sc('ul')(
  ({ $offset, tabsQuantity }) => css`
    position: relative;
    width: 100%;

    display: flex;
    align-items: stretch;
    flex-wrap: wrap;

    ${Mixin.Style.borderAll({ color: 'var(--c-light)' })};
    border-radius: var(--border-radius);

    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: ${$offset}%;
      z-index: 1;

      height: 100%;
      width: ${tabsQuantity}%;

      background-image: var(--g-primary);

      transition: left var(--transition);
    }
  `
)('Tabs');

const Tab = sc('button')(
  ({ isActive, variant }) => css`
    position: relative;
    flex: 1;

    ${Mixin.Style.inputPadding()};

    text-align: center;

    ${getTextVariant({ variant })};
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

    ${inject.tabActiveStyles({ isActive, TabContent })}

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
  `
)('Tab');

const TabContent = sc('span')(css`
  position: relative;
  z-index: 3;
`)('TabContent');

export const Styled = { Tabs, TabContainer, Tab, TabContent };
