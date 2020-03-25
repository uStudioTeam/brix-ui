import { Styled as StyledButton } from '../../../components/Button/styles'; // <button> does not work inside a <label>, so we need to import a styled component to use it as a wrapper for a "button"
import styled, { css } from 'styled-components';
import { Mixin } from '../../../theme';
import { StyledComponents } from '../../../utils/styles/styled-component';
import { inject } from './inject';

const Prefix = styled.div`
  ${Mixin.Font.bodySmall()};

  display: flex;
  align-items: center;

  flex: 0;
  margin-right: var(--i-regular);
`;

const Suffix = styled(Prefix)`
  margin-right: 0;
  margin-left: var(--i-regular);
`;

const Input = styled.input`
  width: 100%;
  margin-top: -1px;

  ${Mixin.Font.bodyRegular()};

  transition: var(--transition);

  &::-webkit-inner-spin-button {
    display: none;
  }

  &::placeholder {
    color: var(--c-neutral);
    transition: var(--transition);
  }
`;

const InputContainer = styled.div(
  ({ isDisabled }) => css`
    display: flex;
    align-items: center;

    width: 100%;
    ${Mixin.Style.inputPadding()};

    border-radius: var(--border-radius);
    ${Mixin.Style.borderAll({ color: 'var(--c-neutral)' })};
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

    ${inject.inputContainerDisabledStyles({ isDisabled, Input })};
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

    ${inject.fileInputColorToggle(value)};
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
    width: 100%;

    display: flex;
    align-items: stretch;

    border-radius: var(--border-radius);
    cursor: pointer;

    overflow: hidden;
    position: relative;

    transition: var(--transition);

    ${inject.fileInputWrapperDisabledStyles(isDisabled)};
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

export const Styled = StyledComponents({ InputContainer, Input, Prefix, Suffix });
export const StyledFileInput = StyledComponents({
  HiddenFileInput,
  FileInput,
  FileInputButton,
  FileInputContainer,
  FileInputWrapper,
  Prefix,
  Suffix,
});
