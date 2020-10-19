import React from 'react';

import { classNames, intrinsicComponent } from '@brix-ui/utils/functions';

import type { AffixProps } from './affix.props';
import Styled from './affix.styles';

const Affix = intrinsicComponent<AffixProps, HTMLElement>(function Affix({ className, ...props }, ref) {
  return <Styled.Affix ref={ref} className={classNames('affix', className)} {...props} />;
});

export default Affix;
