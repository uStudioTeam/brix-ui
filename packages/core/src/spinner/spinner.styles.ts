import styled, { css, Keyframes, keyframes } from 'styled-components';

import { applyDisplayNames } from '@ustudio-ui/utils/functions';

import type { SpinnerProps } from './spinner.props';

export const Spinner = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;

const animation = ({
  index,
  blades,
  timingShift,
  opacity: [opacityFrom, opacityTo],
}: {
  index: number;
  blades: number;
  timingShift: number;
  opacity: [number, number];
}): Keyframes => {
  // Maximum point, %
  const extremumMax = (index / blades) * 100;
  // Minimum points, %
  const extremumMinStart = extremumMax - timingShift;
  const extremumMinEnd = extremumMax + timingShift;
  const extremumMinStartChomped = extremumMinStart >= 0 ? extremumMinStart : 100 - Math.abs(extremumMinStart);
  const extremumMinEndChomped = extremumMinEnd <= 100 ? extremumMinEnd : Math.abs(100 - extremumMinEnd);

  return keyframes`
      ${extremumMinStartChomped}%,
      ${extremumMinEndChomped}% {
        opacity: ${opacityFrom};
      }
  
      ${extremumMax}% {
        opacity: ${opacityTo};
    }`;
};

export const Blade = styled.div<
  Required<Omit<SpinnerProps, 'color' | 'opacity' | 'speed' | 'bladeSize'>> & {
    $width: string;
    $height: string;
    $color: SpinnerProps['color'];
    $opacity: SpinnerProps['opacity'];

    animationDuration: number;
    timingShift: number;
    index: number;
  }
>(
  ({
    theme,
    blades,
    swirl,
    spread,
    $width,
    $height,
    $color = 'faint-strong',
    $opacity: opacity = [],
    animationDuration,
    timingShift,
    index,
  }) => {
    const [opacityFrom = 0.25, opacityTo = 1] = opacity;
    const color = theme.colorHelper.parseColor($color);

    return css`
      width: ${$width};
      height: ${$height};

      position: absolute;
      left: 50%;
      top: 50%;

      opacity: ${index ? opacityFrom : opacityTo};
      border-radius: ${Number.parseFloat($height) / 2}px;
      background-color: ${color};

      animation: ${animation({
          index,
          blades,
          timingShift,
          opacity: [opacityFrom, opacityTo],
        })}
        ${animationDuration}ms infinite;

      transform: rotate(${(index / blades) * 360 - 90}deg)
        translate(calc(-50% - ${(blades + 5) * spread}px), calc(${swirl ? blades * 10 : -50}%));
      transform-origin: left top;
    `;
  }
);

const Styled = applyDisplayNames({ Spinner, Blade });

export default Styled;
