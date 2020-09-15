import React, { useEffect, useRef, useState } from 'react';
import PT from 'prop-types';
import useAutoTransition from 'honks/use-auto-transition';

import { applyPolymorphicFunctionProp, intrinsicComponent, tryCall } from '@ustudio-ui/utils/functions';
import { stylableComponent } from '@ustudio-ui/prop-types/common';

import type { DisclosureProps } from './disclosure.props';
import Styled from './disclosure.styles';

const Disclosure = intrinsicComponent<DisclosureProps, HTMLDivElement>(function Disclosure(
  { children, styles, isOpen, summary, icon, isDisabled, onOpen, onChange, onClose, ...props },
  ref
) {
  const [internalIsOpen, setOpen] = useState(isOpen ?? false);
  const hasChanged = useRef(false);

  // @ToDo: this should become smth like `useControlled`
  useEffect(() => {
    if (isOpen !== undefined) {
      hasChanged.current = true;

      setOpen(isOpen);
    }
  }, [isOpen]);

  useEffect(() => {
    if (hasChanged.current) {
      tryCall(internalIsOpen ? onOpen : onClose);

      tryCall(onChange, internalIsOpen);
    }
  }, [internalIsOpen]);

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
      {...props}
    >
      <Styled.Summary
        as={styles?.Summary}
        type="button"
        isOpen={internalIsOpen}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        onClick={() => {
          hasChanged.current = true;

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
  isOpen: PT.bool,
  summary: PT.node,
  icon: PT.oneOfType([PT.node, PT.func]),

  isDisabled: PT.bool,

  onOpen: PT.func,
  onChange: PT.func,
  onClose: PT.func,

  ...stylableComponent(Styled),
};

export default Disclosure;
