import React, { useMemo } from 'react';
import PT, { Requireable } from 'prop-types';

import { intrinsicComponent, objectValues, orUndefined, random } from '@brix-ui/utils/functions';
import { delayable, stylableComponent } from '@brix-ui/prop-types/common';
import { extract } from '@brix-ui/prop-types/utils';
import { TypeVariant } from '@brix-ui/types/typography';
import useDelay from '@brix-ui/hooks/use-delay';

import Block from '../block';

import type { SkeletonProps, SkeletonSize } from './skeleton.props';
import Styled from './skeleton.styles';

const parseSize = (size: SkeletonSize | undefined): string | undefined => {
  if (typeof size === 'object') {
    const { min, max, unit } = size;

    return `${random(min, max)}${unit}`;
  }

  return size;
};

const Skeleton = intrinsicComponent<SkeletonProps, HTMLDivElement>(function Skeleton(
  { width: _width, height: _height, size: _size, delay, isStatic, isRounded, ...props },
  ref
) {
  const shouldRender = useDelay(delay);

  const width = useMemo(() => parseSize(_width), [_width]);
  const height = useMemo(() => parseSize(_height), [_height]);
  const size = useMemo(() => parseSize(_size), [_size]);

  return shouldRender ? (
    <Styled.Skeleton
      ref={ref}
      className="skeleton"
      $width={width}
      $height={height}
      size={size}
      role="status"
      aria-busy="true"
      aria-live="polite"
      data-static={orUndefined(isStatic)}
      data-rounded={orUndefined(isRounded)}
      {...props}
    />
  ) : null;
});

const { margin, isInline } = extract([Block]);
const blockPropTypes = { margin, isInline };
const skeletonSize = PT.oneOfType([
  PT.string,
  PT.exact({
    min: PT.number,
    max: PT.number,
    unit: PT.string.isRequired,
  }),
]) as Requireable<SkeletonSize>;

Skeleton.propTypes = {
  width: skeletonSize,
  height: PT.oneOfType([PT.oneOf(objectValues(TypeVariant)), skeletonSize]),
  size: skeletonSize,

  isRounded: PT.bool,
  isStatic: PT.bool,

  ...blockPropTypes,
  ...delayable,
  ...stylableComponent([
    'height',
    'backgroundColor',
    'borderRadius',
    'animationDuration',
    'animationTimingFunction',
    'animationIterationCount',
  ]),
};

export default Skeleton;
