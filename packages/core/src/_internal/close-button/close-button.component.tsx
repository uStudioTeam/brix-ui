import React, { FC } from 'react';

import type { ButtonProps } from '../../button';
import Styled from './close-button.styles';

const CloseButton: FC<ButtonProps> = (props) => {
  return (
    <Styled.CloseContainer align="center">
      <Styled.CloseButton {...props} type="button" isRounded appearance="faint">
        <Styled.CloseIcon />
      </Styled.CloseButton>
    </Styled.CloseContainer>
  );
};

export default CloseButton;
