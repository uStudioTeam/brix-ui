import styled, { css, keyframes } from 'styled-components';

const load = keyframes`
  from {
    background-position-x: -1200px;
  }

  to {
    background-position-x: 1200px;
  }
`;

const Progress = styled.progress.withConfig({ displayName: 'Progress' })(
  ({ value, max }) => css`
    appearance: none;
    overflow: hidden;

    width: 100%;
    height: 0.5rem;
    background: transparent;
    border-radius: 0.5rem;

    position: relative;
    
    cursor: wait;

    &:before,
    &:after {
      content: '';

      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
    }

    &:after {
      width: ${(value / max) * 100}%;
      background: linear-gradient(to right, var(--c-primary-light), var(--c-primary));
      background-size: 1200px;

      animation: ${load} 2s linear infinite;
    }

    &:before {
      width: 100%;
      background-color: var(--c-light);
    }
  `
);

export const Styled = { Progress };
