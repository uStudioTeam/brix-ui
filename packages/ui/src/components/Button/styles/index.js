import styled, { css } from 'styled-components';
import { Mixin } from '../../../theme';
import { StyledComponents } from '../../../utils/styles/styled-component';
import { inject } from './inject';

const Button = styled.button(
  ({ intent, appearance, disabled, isLoading }) => css`
    position: relative;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 1 auto;

    ${inject.getAppearance({ isDisabled: disabled, isLoading, intent, appearance })};
    border-radius: var(--border-radius);

    user-select: none;
    transition: var(--transition);

    ${Mixin.Font.bodyRegular()};

    &[disabled] {
      cursor: not-allowed;
      color: var(--c-neutral);

      ${Mixin.Device.desktop(css`
        &:hover {
          box-shadow: none;
        }
      `)}
    }

    ${inject.loadingStyles(isLoading)}
  `
);

const LoadingSpinner = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

export const Styled = StyledComponents({ Button, LoadingSpinner });
