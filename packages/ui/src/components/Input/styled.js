import { Styled as StyledButton } from '../../components/Button/styles'; // <button> does not work inside a <label>, so we need to import a styled component to use it as a wrapper for a "button"
import styled, { css } from 'styled-components';
import { Mixin } from '../../theme';

const Prefix = styled.div.withConfig({ displayName: 'Prefix' })`
  ${Mixin.Font.bodySmall()};

  display: flex;
  align-items: center;
`;

const Suffix = styled(Prefix).withConfig({ displayName: 'Suffix' })``;

const Input = styled.input.withConfig({ displayName: 'Input' })`
  ${Mixin.Font.bodyRegular()};

  margin-top: -1px;

  transition: var(--transition);

  &::-webkit-inner-spin-button {
    display: none;
  }

  &::placeholder {
    color: var(--c-neutral);
    transition: var(--transition);
  }
`;

const InputContainer = styled.div.withConfig({ displayName: 'InputContainer' })(
  ({ isDisabled }) => css`
    ${Mixin.Style.inputPadding()};
    ${Mixin.Style.borderAll({ color: 'var(--c-neutral)' })};

    display: grid;
    grid-auto-flow: column;
    grid-column-gap: var(--i-medium);
    align-items: center;

    width: auto;

    border-radius: var(--border-radius);
    background-color: var(--c-lightest);

    overflow: hidden;
    position: relative;

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

      transform: scaleX(0);
      transform-origin: left;
      transition: transform var(--transition);
    }

    ${isDisabled
      ? css`
          cursor: not-allowed;
          color: var(--c-neutral);
          background-color: var(--c-light);
          border-color: var(--c-light);
        `
      : css`
          ${Mixin.Device.mobile(css`
            &:active {
              box-shadow: var(--s-light);

              &:after {
                transform: scale(1);
              }
            }
          `)}

          ${Mixin.Device.desktop(css`
            &:hover {
              border-color: var(--c-light);
              box-shadow: var(--s-light);
            }

            &:focus-within {
              ${Input}::placeholder {
                opacity: 0;
              }

              border-color: var(--c-light);
              box-shadow: var(--s-light);

              &:after {
                transform: scale(1);
              }
            }
          `)}
        `}
  `
);

const FileInput = styled(Input)(
  ({ value }) => css`
    cursor: pointer;

    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: none;

    ${typeof value !== 'undefined' && value?.length
      ? css`
          color: inherit;
        `
      : css`
          color: var(--c-neutral);
        `}
  `
);

const HiddenFileInput = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  cursor: pointer;

  &[disabled] {
    cursor: not-allowed;
  }
`;

const FileInputWrapper = styled.div(
  ({ isDisabled }) => css`
    display: flex;
    align-items: stretch;

    border-radius: var(--border-radius);
    cursor: pointer;

    overflow: hidden;
    position: relative;

    transition: var(--transition);

    ${isDisabled
      ? css`
          cursor: not-allowed;
          border-color: var(--c-light);
        `
      : ''}
  `
);

const FileInputContainer = styled(InputContainer)`
  border-radius: 0;
  cursor: pointer;
  border-right: none;

  ${Mixin.Device.mobile(css`
    &:active {
      border-right: none;
    }
  `)}

  ${Mixin.Device.desktop(css`
    &:hover,
    &:focus-within {
      border-right: none;
    }
  `)}
`;

const FileInputButton = styled(StyledButton.Button)`
  cursor: pointer;
  border-radius: 0;
  border: none;

  ${Mixin.Device.mobile(css`
    &:active {
      box-shadow: none;
    }
  `)}

  ${Mixin.Device.desktop(css`
    &:hover {
      box-shadow: none;
    }
  `)}
`;

export const Styled = { InputContainer, Input, Prefix, Suffix };
export const StyledFileInput = {
  HiddenFileInput,
  FileInput,
  FileInputButton,
  FileInputContainer,
  FileInputWrapper,
  Prefix,
  Suffix,
};
