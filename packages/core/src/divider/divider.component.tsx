import React, { isValidElement, useMemo } from 'react';
import PT from 'prop-types';

import { classNames, intrinsicComponent, orUndefined } from '@brix-ui/utils/functions';
import { extract } from '@brix-ui/prop-types/utils';
import { indent, stylableComponent } from '@brix-ui/prop-types/common';

import Flex from '../flex';

import type { DividerProps } from './divider.props';
import Styled from './divider.styles';

const Divider = intrinsicComponent<DividerProps, HTMLSpanElement>(function Divider(
  { children, className, color, align, padding, margin, ...props },
  ref
) {
  const hasChildren = useMemo(() => isValidElement(children), [children]);

  return (
    <Styled.Divider
      ref={ref}
      role="separator"
      className={classNames('divider', className)}
      data-has-children={orUndefined(hasChildren)}
      $color={color}
      $align={align}
      $padding={padding}
      $margin={margin}
      {...props}
    >
      {children}
    </Styled.Divider>
  );
});

const { direction, isInline, isReversed } = extract([Flex]);

Divider.propTypes = {
  direction,
  isInline,
  isReversed,
  children: PT.element,
  color: PT.string,
  thickness: PT.string,
  align: PT.oneOf(['start', 'center', 'end']),
  redLine: PT.string,
  padding: indent(),
  margin: indent(),

  ...stylableComponent(),
};

export default Divider;
