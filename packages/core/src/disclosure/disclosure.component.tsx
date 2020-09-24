import React from 'react';
import PT from 'prop-types';
import useAutoTransition from 'honks/use-auto-transition';

import { applyPolymorphicFunctionProp, intrinsicComponent } from '@brix-ui/utils/functions';
import { disclosable, stylableComponent } from '@brix-ui/prop-types/common';

import { useDisclose } from '../_internal/hooks';

import type { DisclosureProps } from './disclosure.props';
import Styled from './disclosure.styles';

const Disclosure = intrinsicComponent<DisclosureProps, HTMLDivElement>(function Disclosure(
  { children, styles, className, isOpen, summary, icon, isDisabled, onOpen, onChange, onClose, ...props },
  ref
) {
  const [internalIsOpen, setOpen] = useDisclose({
    isOpen,
    onOpen,
    onChange,
    onClose,
  });

  const [detailsRef, detailsHeight] = useAutoTransition<HTMLDivElement>(
    (element) => {
      return element.getBoundingClientRect().height;
    },
    [internalIsOpen, 200]
  );

  return (
    <Styled.Container
      ref={ref}
      as={styles?.Container}
      direction="column"
      isOpen={internalIsOpen}
      isDisabled={isDisabled}
      className={className}
      {...props}
    >
      <Styled.Summary
        as={styles?.Summary}
        type="button"
        isOpen={internalIsOpen}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        onClick={() => {
          setOpen(!internalIsOpen);
        }}
      >
        {summary}

        {applyPolymorphicFunctionProp(icon, { isOpen: internalIsOpen, isDisabled }) || (
          <Styled.Icon as={styles?.Icon} />
        )}
      </Styled.Summary>

      <Styled.Details
        as={styles?.Details}
        aria-expanded={internalIsOpen}
        style={{
          height: detailsHeight,
        }}
      >
        <div ref={detailsRef}>{children}</div>
      </Styled.Details>
    </Styled.Container>
  );
});

Disclosure.propTypes = {
  summary: PT.node,
  icon: PT.oneOfType([PT.node, PT.func]),

  isDisabled: PT.bool,

  ...disclosable,
  ...stylableComponent(Styled),
};

export default Disclosure;
