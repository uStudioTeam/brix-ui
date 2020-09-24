import type { HTMLAttributes } from 'react';

import type { Delayable, IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';

import type { BlockProps } from '../block';

export type SkeletonSize =
  | string
  | {
      min?: number;
      max?: number;
      unit: string;
    };

export interface SkeletonProps
  extends Omit<BlockProps, 'as' | 'padding' | 'gap'>,
    IntrinsicComponent<HTMLAttributes<HTMLDivElement>>,
    StylableComponent,
    Delayable {
  width?: SkeletonSize;
  height?: SkeletonSize;
  size?: SkeletonSize;

  isRounded?: boolean;
  isStatic?: boolean;
}
