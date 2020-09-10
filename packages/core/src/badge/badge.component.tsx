import React, { isValidElement } from 'react';

import { intrinsicComponent } from '@ustudio-ui/utils/functions';

import type { BadgeProps } from './badge.props';
import Styled from './badge.styles';

const Badge = intrinsicComponent<BadgeProps, HTMLDivElement>(function Badge(
  { children, styled, color, backgroundColor, value, shouldDisplay = true, ...props },
  ref
) {
  return (
    <Styled.BadgeContainer as={styled?.BadgeContainer}>
      {children}

      {shouldDisplay && (
        <Styled.Badge
          as={styled?.Badge}
          ref={ref}
          hasChildren={isValidElement(children)}
          $color={color}
          $backgroundColor={backgroundColor}
          $value={value}
          {...props}
        >
          {value}
        </Styled.Badge>
      )}
    </Styled.BadgeContainer>
  );
});

export default Badge;
