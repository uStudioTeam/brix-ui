import React, { useMemo } from 'react';

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
  const animationDuration = useMemo(() => blades * speed, [blades, speed]);
  const timingShift = useMemo(() => 100 / blades, [blades]);
  const { width, height } = useMemo(() => parseBladeSize(bladeSize), [JSON.stringify(bladeSize)]);

  const bladeProps = {
    blades,
    $width: width,
    $height: height,
    $color: color,
    $opacity: opacity,
    swirl,
    spread,
    animationDuration,
    timingShift,
  };

  return (
    <Styled.Spinner as={styles?.Spinner} ref={ref} className={className}>
      {[...new Array(blades).keys()].map((_, index) => {
        // eslint-disable-next-line react/no-array-index-key
        return <Styled.Blade as={styles?.Blade} key={index} index={index} {...bladeProps} />;
      })}
    </Styled.Spinner>
  );
});

export default Spinner;
