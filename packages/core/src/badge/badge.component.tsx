import React, { isValidElement } from 'react';
import PT from 'prop-types';

import { classNames, intrinsicComponent, orUndefined } from '@brix-ui/utils/functions';
import { stylableComponent } from '@brix-ui/prop-types/common';
import { Align } from '@brix-ui/types/css';

import Text from '../text';

import type { BadgeProps } from './badge.props';
import Styled from './badge.styles';

const Badge = intrinsicComponent<BadgeProps, HTMLDivElement>(function Badge(
  { children, className, color, backgroundColor, value, shouldDisplay = true, ...props },
  ref
) {
  return (
    <Styled.BadgeContainer className={classNames('badge-container')}>
      {children}

      {shouldDisplay && (
        <Styled.Badge
          ref={ref}
          className={classNames('badge', className)}
          data-has-children={orUndefined(isValidElement(children))}
          data-long-value={orUndefined(`${value || ''}`.length > 1)}
          $color={color}
          $backgroundColor={backgroundColor}
          {...props}
        >
          <Text className={classNames('badge__value')} variant="h5" as="span" lineHeightCompensation>
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

  ...stylableComponent(),
};

export default Badge;
