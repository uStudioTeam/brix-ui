import styled, { css } from 'styled-components';
import { Mixin } from '../../../theme';
import { inject } from './inject';

const Container = styled.div.withConfig({ displayName: 'DropdownContainer' })(
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
);

const Title = styled.button.withConfig({ displayName: 'DropdownTitle' })`
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
`;

const TitleIcon = styled.span.withConfig({ displayName: 'DropdownTitleIcon' })`
  span {
    margin-left: var(--i-regular);
    transition: var(--transition);
    transition-delay: 150ms;
    transition-property: transform;
  }
`;

const Dropdown = styled.div.withConfig({ displayName: 'Dropdown' })(
  ({ dropdownHeight }) => css`
    overflow: hidden;

    height: ${dropdownHeight};

    transition: var(--transition);
  `
);

const Content = styled.div.withConfig({ displayName: 'DropdownContent' })`
  padding: 1rem;
`;

export const Styled = { Container, Title, TitleIcon, Dropdown, Content };
