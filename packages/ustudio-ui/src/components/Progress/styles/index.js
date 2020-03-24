import styled, { css } from 'styled-components';

import { StyledComponents } from '../../../utils/styles/styled-component';
import { inject } from './inject';
import { animation } from './animation';

const Progress = styled.progress(
  ({ value, max }) => css`
    appearance: none;
    overflow: hidden;

    width: 100%;
    height: 0.5rem;
    background: rgba(255, 255, 255, 0);
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
      ${inject.width({ value, max })};

      background: linear-gradient(to right, var(--c-primary-light), var(--c-primary));
      background-size: 1200px;

      animation: ${animation.load} 2s linear infinite;
    }

    &:before {
      width: 100%;
      background-color: var(--c-light);
    }
  `
);

export const Styled = StyledComponents({ Progress });
