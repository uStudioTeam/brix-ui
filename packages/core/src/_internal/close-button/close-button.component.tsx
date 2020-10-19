import React, { FC } from 'react';

import { classNames } from '@brix-ui/utils/functions';

import type { ButtonProps } from '../../button';
import Styled from './close-button.styles';

const CloseButton: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <Styled.CloseContainer className={classNames('close-button-container')} align="center">
      <Styled.CloseButton
        className={classNames('close-button', className)}
        {...props}
        type="button"
        isRounded
        appearance="faint"
      >
        <Styled.CloseIcon className={classNames('close-button__icon')} />
      </Styled.CloseButton>
    </Styled.CloseContainer>
  );
};

export default CloseButton;
