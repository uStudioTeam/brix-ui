import React from 'react';
import PT from 'prop-types';

import { classNames, intrinsicComponent, orUndefined } from '@brix-ui/utils/functions';
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
  { children, className, intent, showStatus = true, onClose, ...props },
  ref
) {
  return (
    <Styled.Alert
      ref={ref}
      className={classNames('alert', className)}
      aria-live={intent === Intent.Critical ? 'assertive' : undefined}
      intent={intent}
      data-show-status={orUndefined(showStatus)}
      data-should-close={orUndefined(Boolean(onClose))}
      isInline
      {...props}
    >
      {showStatus && <Status className={classNames('alert__status')} intent={intent} hasBorder={false} />}

      {children}

      {onClose && <CloseButton className={classNames('alert__close-button')} intent={intent} onClick={onClose} />}
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
