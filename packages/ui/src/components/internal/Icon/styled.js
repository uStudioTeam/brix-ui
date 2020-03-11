import styled, { css } from 'styled-components';

function getSize({ size = 'small' }) {
  return {
    small: 10,
    medium: 12,
    large: 18,
  }[size];
}

const Icon = styled.span.withConfig({ displayName: 'Icon' })(
  ({ size, angle }) => css`
    display: inline-block;

    width: ${getSize({ size })}px;
    height: ${getSize({ size })}px;

    transform: rotate(${angle}deg);
    transform-origin: center center;
  `
);

export const Styled = { Icon };
