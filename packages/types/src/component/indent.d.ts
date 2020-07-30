import { Values } from '@ustudio-ui/utils/types';

import { Position } from '../css';
import { Axis } from './axis';

export type PositionIndent = Partial<Record<Values<typeof Position>, string>>;

export type AxisIndent = Partial<Record<Values<typeof Axis>, string>>;

export interface MixedHorizontalIndent {
  top?: string;
  bottom?: string;
  horizontal?: string;
}

export interface MixedVerticalIndent {
  left?: string;
  right?: string;
  vertical?: string;
}

export type Indent = PositionIndent | AxisIndent | MixedHorizontalIndent | MixedVerticalIndent | string;
