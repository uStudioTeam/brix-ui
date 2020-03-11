import styled, { css } from 'styled-components';

import { reverseDirection } from '../../utils';
import { Mixin } from '../../theme';

const Container = styled.div.withConfig({ displayName: 'RadioGroupContainer' })(
  ({ dataDirection }) => css`
    display: grid;
    grid-auto-flow: ${reverseDirection(dataDirection)};
    grid-gap: var(--i-regular);
  `
);

const RadioGroup = styled.ul.withConfig({ displayName: 'RadioGroup' })(
  ({ dataDirection }) => css`
    flex: 1;
    display: grid;
    grid-auto-flow: ${reverseDirection(dataDirection)};
    grid-gap: var(--i-regular);
  `
);

const RadioGroupItem = styled.li.withConfig({ displayName: 'RadioGroupItem' })`
  position: relative;

  display: flex;
  align-items: center;
`;

const Label = styled.label.withConfig({ displayName: 'RadioGroupLabel' })(
  ({ isDisabled, isReversed }) => css`
    ${Mixin.Font.bodyRegular()};
    height: var(--i-regular);

    display: flex;
    flex-direction: ${isReversed ? 'row-reverse' : 'row'};
    align-items: center;

    cursor: pointer;

    ${RadioButton} {
      margin-right: ${isReversed ? '0' : 'var(--i-regular)'};
      margin-left: ${isReversed ? 'var(--i-regular)' : '0'};
    }

    ${isDisabled
      ? css`
          color: var(--c-neutral);
          cursor: not-allowed;

          ${Mixin.Device.desktop(css`
            &:hover {
              ${RadioButton} {
                box-shadow: none;
              }
            }

            &:active {
              ${RadioButton} {
                &:after {
                  background-color: var(--c-lightest);
                }
              }
            }
          `)}

          ${Mixin.Device.mobile(css`
            &:active {
              ${RadioButton} {
                &:after {
                  background-color: var(--c-lightest);
                }
              }
            }
          `)}
        `
      : ''};
  `
);

const RadioButton = styled.span`
  ${Mixin.Style.borderAll({ color: 'var(--c-primary)' })};

  display: flex;
  align-items: center;
  justify-content: center;

  width: var(--i-regular);
  height: var(--i-regular);
  border-radius: 50%;
  margin-top: 2px;

  background-color: var(--c-lightest);

  cursor: pointer;

  transition: var(--transition);

  &:after {
    content: '';

    width: var(--i-medium);
    height: var(--i-medium);
    border-radius: 50%;

    background-color: var(--c-lightest);

    transition: var(--transition);
  }
`;

const Input = styled.input.withConfig({ displayName: 'RadioGroupInput' })`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;

  ${Mixin.Device.mobile(css`
    &:not([disabled]):active + ${RadioButton} {
      &:after {
        background-color: var(--c-primary);
      }
    }

    &[checked]:active + ${RadioButton} {
      background-color: var(--c-primary-light);
    }
  `)}

  ${Mixin.Device.desktop(css`
    &:not([disabled]):focus + ${RadioButton}, &:not([disabled]):hover + ${RadioButton} {
      box-shadow: var(--s-primary);
    }

    &:active + ${RadioButton} {
      &:after {
        background-color: var(--c-primary);
      }
    }

    &[checked]:focus + ${RadioButton}, &[checked]:active + ${RadioButton} {
      background-color: var(--c-primary-light);
    }
  `)}

  &[checked] + ${RadioButton} {
    background-color: var(--c-primary);
  }

  &[disabled] + ${RadioButton} {
    cursor: not-allowed;
    border-color: var(--c-neutral);
  }

  &[checked][disabled] + ${RadioButton} {
    background-color: var(--c-light);
    border-color: var(--c-light);

    &:after {
      background-color: var(--c-neutral);
    }

    ${Mixin.Device.mobile(css`
      &:active {
        &:after {
          background-color: var(--c-neutral);
        }
      }
    `)}

    ${Mixin.Device.desktop(css`
      &:hover {
        box-shadow: none;
      }

      &:active {
        &:after {
          background-color: var(--c-neutral);
        }
      }
    `)}
  }
`;

export const Styled = { Container, RadioGroup, RadioGroupItem, Label, RadioButton, Input };
