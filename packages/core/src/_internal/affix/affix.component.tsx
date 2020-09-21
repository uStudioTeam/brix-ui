import React from 'react';

import { intrinsicComponent } from '@brix-ui/utils/functions';

import type { AffixProps } from './affix.props';
import Styled from './affix.styles';

const Affix = intrinsicComponent<AffixProps, HTMLElement>(function Affix(props, ref) {
  return <Styled.Affix ref={ref} {...props} />;
});

export default Affix;
