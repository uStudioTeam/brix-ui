import type { FlexProps } from '@brix-ui/core/flex';
import type { BreakpointsProps, Gapable, PolymorphicBreakpointProp } from '@brix-ui/types/component';

// Did not use PolymorphicBreakpointProp on the `template`
// as it may mislead to having a different argument available
export interface GridBreakpointProps extends Pick<FlexProps, 'direction' | Extract<keyof Gapable, 'gap'>> {
  template?: ((fractionsCount: number) => string) | string;
  maxWidth?: PolymorphicBreakpointProp;
}

export interface GridProps
  extends BreakpointsProps<GridBreakpointProps>,
    Omit<FlexProps, 'isReversed' | 'hasWrap' | Exclude<keyof Gapable, 'gap'>> {}
