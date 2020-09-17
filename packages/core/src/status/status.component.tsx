import React from 'react';

import { intrinsicComponent } from '@ustudio-ui/utils/functions';

import { StatusProps } from './status.props';

import Styled from './status.styles';

const Status = intrinsicComponent<StatusProps, HTMLDivElement>(function Status({ animation, ...props }, ref) {
  return <Styled.Status ref={ref} $animation={animation} {...props} />;
});

export default Status;
