import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '@brix-ui/utils/functions';
import { intentable, stylableComponent } from '@brix-ui/prop-types/common';

import type { StatusProps } from './status.props';
import Styled from './status.styles';

const Status = intrinsicComponent<StatusProps, HTMLDivElement>(function Status(props, ref) {
  return <Styled.Status ref={ref} {...props} />;
});

Status.propTypes = {
  isStatic: PT.bool,
  hasBorder: PT.bool,

  ...intentable,
  ...stylableComponent(),
};

export default Status;
