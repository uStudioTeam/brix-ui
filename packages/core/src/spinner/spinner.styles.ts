import styled, { css, Keyframes } from 'styled-components';

import { applyDisplayNames } from '@brix-ui/utils/functions';

import type { SpinnerProps } from './spinner.props';

const Spinner = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;

const Blade = styled.div<{
  $width: string;
  $height: string;
  $color: SpinnerProps['color'];
  $animation: Keyframes;

  animationDuration: number;
}>(({ theme, $width: width, $height: height, $color = 'faint-strong', $animation: animation, animationDuration }) => {
  const color = theme.colorHelper.parseColor($color);

  // `width` and `height` are swapped to represent themselves more intuitively to the user
  return css`
    width: ${height};
    height: ${width};

    position: absolute;
    left: 50%;
    top: 50%;

    border-radius: ${Math.min(Number.parseFloat(width), Number.parseFloat(height)) / 2}px;
    background-color: ${color};

    animation: ${animation} ${animationDuration}ms infinite;

    transform-origin: left top;
    transition: all var(--transition-short);
  `;
});

const Styled = applyDisplayNames({ Spinner, Blade });

export default Styled;
