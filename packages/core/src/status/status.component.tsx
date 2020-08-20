import React from 'react';

import { intrinsicComponent } from '@ustudio-ui/utils/functions';
import { StatusProps } from '@ustudio-ui/core/status/status.props';

import Styled from './status.styles';

const Status = intrinsicComponent<StatusProps, HTMLDivElement>(function Status({ ...props }, ref) {
  return <Styled.Status ref={ref} {...props} />;
});

export default Status;
