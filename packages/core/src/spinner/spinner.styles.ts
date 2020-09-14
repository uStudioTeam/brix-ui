import styled, { css } from 'styled-components';

import { applyDisplayNames } from '@ustudio-ui/utils/functions';

import type { SpinnerProps } from './spinner.props';

export const Spinner = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;

export const Blade = styled.div<{
  $width: string;
  $height: string;
  $color: SpinnerProps['color'];

  animation: string;
  animationDuration: number;
}>(({ theme, $width, $height, $color = 'faint-strong', animation, animationDuration }) => {
  const color = theme.colorHelper.parseColor($color);

  return css`
    width: ${$width};
    height: ${$height};

    position: absolute;
    left: 50%;
    top: 50%;

    border-radius: ${Number.parseFloat($height) / 2}px;
    background-color: ${color};

    animation: ${animation} ${animationDuration}ms infinite;

    transform-origin: left top;
    transition: all 200ms;
  `;
});

const Styled = applyDisplayNames({ Spinner, Blade });

export default Styled;
