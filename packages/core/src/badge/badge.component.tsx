import React, { isValidElement } from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '@brix-ui/utils/functions';
import { stylableComponent } from '@brix-ui/prop-types/common';
import { Align } from '@brix-ui/types/css';

import Text from '../text';

import type { BadgeProps } from './badge.props';
import Styled from './badge.styles';

const Badge = intrinsicComponent<BadgeProps, HTMLDivElement>(function Badge(
  { children, styles, className, color, backgroundColor, value, shouldDisplay = true, ...props },
  ref
) {
  return (
    <Styled.BadgeContainer as={styles?.BadgeContainer}>
      {children}

      {shouldDisplay && (
        <Styled.Badge
          as={styles?.Badge}
          ref={ref}
          hasChildren={isValidElement(children)}
          $color={color}
          $backgroundColor={backgroundColor}
          $value={value}
          className={className}
          {...props}
        >
          <Text variant="h5" as="span" lineHeightCompensation>
            {value}
          </Text>
        </Styled.Badge>
      )}
    </Styled.BadgeContainer>
  );
});

const badgePositionPropTypes = PT.oneOf([Align.Start, Align.End, Align.Center]);

Badge.propTypes = {
  color: PT.string,
  backgroundColor: PT.string,

  horizontalPosition: badgePositionPropTypes,
  verticalPosition: badgePositionPropTypes,
  horizontalOffset: PT.string,
  verticalOffset: PT.string,

  shouldDisplay: PT.bool,
  value: PT.oneOfType([PT.string, PT.number]),

  ...stylableComponent(Styled),
};

export default Badge;
