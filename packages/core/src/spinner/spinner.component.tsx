import React, { useCallback, useMemo } from 'react';
import { Keyframes, keyframes } from 'styled-components';

import { intrinsicComponent } from '@ustudio-ui/utils/functions';

import type { SpinnerProps } from './spinner.props';
import Styled from './spinner.styles';

const parseBladeSize = (
  bladeSize: SpinnerProps['bladeSize']
): Required<Exclude<SpinnerProps['bladeSize'], string | undefined>> => {
  if (typeof bladeSize === 'string') {
    return {
      width: bladeSize,
      height: bladeSize,
    };
  }

  return {
    width: bladeSize?.width || '10px',
    height: bladeSize?.height || '4px',
  };
};

const Spinner = intrinsicComponent<SpinnerProps, HTMLDivElement>(function Spinner(
  { blades = 9, bladeSize, speed = 150, color, opacity, swirl, spread = 1, className, styles },
  ref
) {
  const [opacityFrom, opacityTo] = [opacity?.[0] || 0.25, opacity?.[1] || 1];
  const animationDuration = useMemo(() => blades * speed, [blades, speed]);
  const timingShift = useMemo(() => 100 / blades, [blades]);
  const { width, height } = useMemo(() => parseBladeSize(bladeSize), [JSON.stringify(bladeSize)]);

  const animations = useCallback(
    (index: number): Keyframes => {
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
    },
    [blades, opacityFrom, opacityTo, timingShift]
  );

  const transform = useCallback(
    (index: number): string => {
      return `
        rotate(${(index / blades) * 360 - 90}deg)
        translate(calc(-50% - ${(blades + 5) * spread}px), calc(${swirl ? blades * 10 : -50}%))
      `;
    },
    [blades, spread, swirl]
  );

  return (
    <Styled.Spinner as={styles?.Spinner} ref={ref} className={className}>
      {[...new Array(blades).keys()].map((_, index) => {
        return (
          <Styled.Blade
            as={styles?.Blade}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            animation={animations(index)}
            animationDuration={animationDuration}
            $width={width}
            $height={height}
            $color={color}
            style={{
              transform: transform(index),
              opacity: index ? opacityFrom : opacityTo,
            }}
          />
        );
      })}
    </Styled.Spinner>
  );
});

export default Spinner;
