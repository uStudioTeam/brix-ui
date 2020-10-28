import styled from 'styled-components';

import Times from '@brix-ui/icons/times';
import { size } from '@brix-ui/theme/mixin';
import { applyDisplayNames } from '@brix-ui/utils/functions';

import Button from '../../button';
import Flex from '../../flex';

const CloseButton = styled(Button)`
  ${size('var(--button-size)')};

  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all var(--transition-short);
`;

const CloseContainer = styled(Flex).attrs(() => ({
  forwardedAs: 'label',
}))`
  --button-size: 12px;

  position: absolute;
  top: 0;
  right: 0;

  ${size('28px')};

  transition: all var(--transition-short);

  cursor: pointer;

  &:active {
    ${CloseButton} {
      transform: scale(0.875);
    }
  }
`;

const CloseIcon = styled(Times)`
  ${size('calc(var(--button-size) * (2 / 3))')};

  transition: all var(--transition-short);
`;

const Styled = applyDisplayNames({ CloseContainer, CloseButton, CloseIcon });

export default Styled;
