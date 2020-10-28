import React, { useCallback, useMemo } from 'react';
import PT, { Requireable } from 'prop-types';
import { Keyframes, keyframes } from 'styled-components';

import { classNames, intrinsicComponent } from '@brix-ui/utils/functions';
import { delayable, stylableComponent } from '@brix-ui/prop-types/common';
import useDelay from '@brix-ui/hooks/use-delay';

import Styled from './spinner.styles';
import type { SpinnerProps } from './spinner.props';

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
    width: bladeSize?.width || '4px',
    height: bladeSize?.height || '10px',
  };
};

const Spinner = intrinsicComponent<SpinnerProps, HTMLDivElement>(function Spinner(
  {
    className,
    blades = 9,
    bladeSize,
    speed = 100,
    color,
    property = 'opacity',
    range,
    swirl,
    spread = 1,
    delay,
    ...props
  },
  ref
) {
  const [rangeFrom, rangeTo] = useMemo(() => [range?.[0] || 0.25, range?.[1] || 1], [JSON.stringify(range)]);
  const animationDuration = useMemo(() => blades * speed, [blades, speed]);
  const timingShift = useMemo(() => 100 / blades, [blades]);
  const { width, height } = useMemo(() => parseBladeSize(bladeSize), [JSON.stringify(bladeSize)]);

  const animation = useCallback(
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
          ${property}: ${rangeFrom};
        }
    
        ${extremumMax}% {
          ${property}: ${rangeTo};
      }`;
    },
    [blades, rangeFrom, rangeTo, timingShift]
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

  const shouldRender = useDelay(delay);

  return shouldRender ? (
    <Styled.Spinner
      ref={ref}
      className={classNames('spinner', className)}
      role="status"
      aria-busy="true"
      aria-live="polite"
      {...props}
    >
      {[...new Array(blades).keys()].map((_, index) => {
        return (
          <Styled.Blade
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            data-index={index}
            className={classNames('spinner__blade')}
            animationDuration={animationDuration}
            $animation={animation(index)}
            $width={width}
            $height={height}
            $color={color}
            style={{
              transform: transform(index),
              [property]: index ? rangeFrom : rangeTo,
            }}
          />
        );
      })}
    </Styled.Spinner>
  ) : null;
});

Spinner.propTypes = {
  blades: PT.number,
  bladeSize: PT.oneOfType([
    PT.string,
    PT.exact({
      width: PT.string,
      height: PT.string,
    }),
  ]) as Requireable<SpinnerProps['bladeSize']>,
  speed: PT.number,
  color: PT.string,
  property: PT.string,
  range: PT.arrayOf(PT.oneOfType([PT.number, PT.string])) as Requireable<SpinnerProps['range']>,
  swirl: PT.bool,
  spread: PT.number,

  ...delayable,
  ...stylableComponent(),
};

export default Spinner;
