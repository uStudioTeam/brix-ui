import { Position as _Position } from '../css';
import { Axis as _Axis } from './axis';

type Position = typeof _Position;
type Axis = typeof _Axis;

export type PositionIndent = Partial<Record<Position[keyof Position], string>>;

export type AxisIndent = Partial<Record<Axis[keyof Axis], string>>;

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
