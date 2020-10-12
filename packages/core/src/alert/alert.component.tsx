import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '@brix-ui/utils/functions';
import { intentable } from '@brix-ui/prop-types/common';
import { extract } from '@brix-ui/prop-types/utils';
import type { FlexElement } from '@brix-ui/types/html';
import { Intent } from '@brix-ui/types/component';

import CloseButton from '../_internal/close-button';
import Flex from '../flex';
import Status from '../status';

import type { AlertProps } from './alert.props';
import Styled from './alert.styles';

const Alert = intrinsicComponent<AlertProps, FlexElement>(function Alert(
  { children, intent, showStatus = true, onClose, ...props },
  ref
) {
  return (
    <Styled.Alert
      ref={ref}
      aria-live={intent === Intent.Critical ? 'assertive' : undefined}
      intent={intent}
      showStatus={showStatus}
      onClose={onClose}
      {...props}
    >
      {showStatus && <Status intent={intent} />}

      {children}

      {onClose && <CloseButton intent={intent} onClick={onClose} />}
    </Styled.Alert>
  );
});

const flexPropTypes = extract([Flex]);

Alert.propTypes = {
  showStatus: PT.bool,
  onClose: PT.func,

  ...flexPropTypes,
  ...intentable,
};

export default Alert;
