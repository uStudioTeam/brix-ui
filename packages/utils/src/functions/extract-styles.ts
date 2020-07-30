import { FlattenSimpleInterpolation } from 'styled-components';

export const extractStyles = <S extends string | Record<string, FlattenSimpleInterpolation>>(
  styles: S | undefined
): S | undefined => styles;
