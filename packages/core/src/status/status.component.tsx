import React from 'react';

import { intrinsicComponent } from '@brix-ui/utils/functions';

import type { StatusProps } from './status.props';
import Styled from './status.styles';

const Status = intrinsicComponent<StatusProps, HTMLDivElement>(function Status(props, ref) {
  return <Styled.Status ref={ref} {...props} />;
});

export default Status;
