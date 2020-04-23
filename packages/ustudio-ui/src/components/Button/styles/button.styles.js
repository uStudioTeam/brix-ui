import { css } from 'styled-components';
import { Mixin } from '../../../theme';
import { sc } from '../../../utils';

import { inject } from './button.inject';

const Button = sc('button')(
  ({ intent, appearance, disabled, isLoading }) => css`
    position: relative;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 1 auto;

    ${inject.getAppearance({ isDisabled: disabled, isLoading, intent, appearance })};
    border-radius: var(--border-radius);

    ${Mixin.Font.bodyRegular()};

    user-select: none;
    transition: var(--transition);

    ${inject.loadingStyles(isLoading)}

    &[disabled] {
      cursor: not-allowed;
      color: var(--c-neutral);

      ${Mixin.Device.desktop(css`
        &:hover {
          box-shadow: none;
        }
      `)}
    }
  `
)('Button');

const LoadingSpinner = sc('span')(css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
`)('LoadingSpinner');

export const Styled = { Button, LoadingSpinner };
