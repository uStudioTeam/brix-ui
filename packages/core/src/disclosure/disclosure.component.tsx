import React from 'react';
import PT from 'prop-types';
import useAutoTransition from 'honks/use-auto-transition';

import { applyPolymorphicFunctionProp, classNames, intrinsicComponent, orUndefined } from '@brix-ui/utils/functions';
import { disclosable, stylableComponent } from '@brix-ui/prop-types/common';
import { useDisabled } from '@brix-ui/contexts/disabled';
import useDisclose from '@brix-ui/hooks/use-disclose';
import { useTheme } from '@brix-ui/theme';

import type { DisclosureProps } from './disclosure.props';
import Styled from './disclosure.styles';

const Disclosure = intrinsicComponent<DisclosureProps, HTMLDivElement>(function Disclosure(
  {
    children,
    className,
    isOpen,
    transitionSpeed,
    summary,
    icon,
    onOpen,
    onChange,
    onClose,
    isDisabled: _isDisabled,
    ...props
  },
  ref
) {
  const isDisabled = useDisabled(_isDisabled);

  const [internalIsOpen, toggle] = useDisclose({
    isOpen,
    onOpen,
    onChange,
    onClose,
  });

  const { transition } = useTheme();

  const [detailsRef, detailsHeight] = useAutoTransition<HTMLDivElement>(
    (element) => {
      return element.getBoundingClientRect().height;
    },
    // @TODO [Dmytro Vasylkivskyi]: maybe change transition speed depending on the detailsHeight
    [internalIsOpen, transitionSpeed ?? transition.long]
  );

  return (
    <Styled.Container
      ref={ref}
      className={classNames('disclosure', className)}
      direction="column"
      data-expanded={internalIsOpen}
      aria-disabled={orUndefined(isDisabled)}
      {...props}
    >
      <Styled.Summary
        className={classNames('disclosure-summary')}
        type="button"
        data-expanded={internalIsOpen}
        disabled={isDisabled}
        aria-disabled={orUndefined(isDisabled)}
        onClick={() => toggle()}
      >
        {summary}

        {applyPolymorphicFunctionProp(icon, { isOpen: internalIsOpen, isDisabled }) || (
          <Styled.Icon className={classNames('disclosure-summary__icon')} />
        )}
      </Styled.Summary>

      <Styled.Details
        className={classNames('disclosure-details')}
        transitionSpeed={transitionSpeed}
        aria-expanded={internalIsOpen}
        style={{
          height: detailsHeight,
        }}
      >
        <div className={classNames('disclosure-details__inner')} ref={detailsRef}>
          {children}
        </div>
      </Styled.Details>
    </Styled.Container>
  );
});

Disclosure.propTypes = {
  summary: PT.node,
  icon: PT.oneOfType([PT.node, PT.func]),

  isDisabled: PT.bool,

  ...disclosable,
  ...stylableComponent('iconIndent'),
};

export default Disclosure;
