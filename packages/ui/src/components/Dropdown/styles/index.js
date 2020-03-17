import styled, { css } from 'styled-components';
import { Mixin } from '../../../theme';
import { StyledComponents } from '../../../utils/styles/styled-component';
import { inject } from './inject';

const DropdownContainer = styled.div(
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

const Title = styled.button`
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

const TitleIcon = styled.span`
  span {
    margin-left: var(--i-regular);
    transition: var(--transition);
    transition-delay: 150ms;
    transition-property: transform;
  }
`;

const Dropdown = styled.div(
  ({ dropdownHeight }) => css`
    overflow: hidden;

    height: ${dropdownHeight};

    transition: var(--transition);
  `
);

const Content = styled.div`
  padding: 1rem;
`;

export const Styled = StyledComponents({ DropdownContainer, Title, TitleIcon, Dropdown, Content });
