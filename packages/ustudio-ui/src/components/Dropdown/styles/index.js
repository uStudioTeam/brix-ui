import { css } from 'styled-components';
import { Mixin } from '../../../theme';
import { sc } from '../../../utils';

import { inject } from './inject';

const DropdownContainer = sc('div')(
  ({ isOpen }) => css`
    ${Mixin.Style.borderAll({ color: 'var(--c-light)' })};

    width: 100%;

    color: var(--c-darkest);
    background-color: var(--c-lightest);

    ${inject.boxShadow(isOpen)};
    border-radius: var(--border-radius);

    transition: var(--transition);

    ${Mixin.Device.desktop(css`
      &:hover,
      &:focus {
        box-shadow: var(--s-light);
      }
    `)}

    ${Mixin.Device.mobile(css`
      &:active {
        box-shadow: var(--s-light);
      }
    `)}
  `
)('DropdownContainer');

const Title = sc('button')(css`
  ${Mixin.Font.bodyRegular()};
  padding: var(--i-regular);
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: var(--transition);

  ${Mixin.Device.desktop(css`
    &:hover {
      color: var(--c-primary);
    }

    &:active {
      color: var(--c-primary-light);
    }
  `)}

  ${Mixin.Device.mobile(css`
    &:active {
      color: var(--c-primary);
    }
  `)}


  &[disabled] {
    color: var(--c-neutral);
    cursor: not-allowed;
    background-color: var(--c-light);

    &:hover,
    &:active {
      color: var(--c-neutral);
    }
  }
`)('Title');

const TitleIcon = sc('span')(css`
  span {
    margin-left: var(--i-regular);
    transition: var(--transition);
    transition-delay: 150ms;
    transition-property: transform;
  }
`)('TitleIcon');

const Dropdown = sc('div')(
  ({ dropdownHeight }) => css`
    overflow: hidden;

    height: ${dropdownHeight};

    transition: var(--transition);
  `
)('Dropdown');

const Content = sc('div')(css`
  padding: 1rem;
`)('Content');

export const Styled = { DropdownContainer, Title, TitleIcon, Dropdown, Content };
