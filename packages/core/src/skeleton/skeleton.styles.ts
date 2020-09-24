import styled, { css, keyframes } from 'styled-components';

import { TypeVariant } from '@brix-ui/types/typography';
import type { Values } from '@brix-ui/utils/types';

import Block from '../block';

import type { SkeletonProps } from './skeleton.props';

const tryTextHeight = (height: string | undefined): string | undefined => {
  switch (height as Values<typeof TypeVariant>) {
    case 'h1':
      return '1.875rem';
    case 'h2':
      return '1.375rem';
    case 'h3':
      return '1.125rem';
    case 'h4':
      return '1rem';
    case 'h5':
      return '0.75rem';
    case 'p':
      return '1rem';
    case 'small':
      return '0.75rem';
    default:
      return height;
  }
};

const tryTextLineHeight = (height: string | undefined): string | undefined => {
  switch (height as Values<typeof TypeVariant>) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'p':
    case 'small':
      return 'calc((var(--height) * 0.375) / 2)';
    default:
      return undefined;
  }
};

const shimmer = keyframes`
  from {
    background-position: -2000px 0;
  }
  to {
    background-position: 2000px 0;
  }
`;

const Skeleton = styled(Block)<
  Omit<SkeletonProps, 'size' | 'width' | 'height'> & {
    size: string | undefined;
    $width: string | undefined;
    $height: string | undefined;
  }
>(
  ({ size, $width: width, $height: height, isRounded, isStatic }) => css`
    --height: ${size || tryTextHeight(height)};
    --background-color: var(--c-faint-weak);
    --border-radius: ${isRounded ? 'calc(var(--height) / 2)' : '2px'};

    --animation-duration: 3s;
    --animation-timing-function: linear;
    --animation-iteration-count: infinite;

    width: ${size || width || '100%'};
    height: var(--height);

    margin-top: ${tryTextLineHeight(height)};
    margin-bottom: ${tryTextLineHeight(height)};

    border-radius: var(--border-radius);

    ${isStatic
      ? css`
          background-color: var(--background-color);
        `
      : css`
          background-image: linear-gradient(
            to right,
            var(--background-color),
            rgba(255, 255, 255, 0),
            var(--background-color)
          );
          background-size: 2000px 100%;

          animation: ${shimmer} var(--animation-duration) var(--animation-timing-function)
            var(--animation-iteration-count);
        `};

    cursor: wait;
  `
);

const Styled = { Skeleton };

export default Styled;
