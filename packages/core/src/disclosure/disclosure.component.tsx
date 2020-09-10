import React, { useEffect, useRef, useState } from 'react';
import useAutoTransition from 'honks/use-auto-transition';

import { applyPolymorphicFunctionProp, intrinsicComponent, tryCall } from '@ustudio-ui/utils/functions';

import type { DisclosureProps } from './disclosure.props';
import Styled from './disclosure.styles';

const Disclosure = intrinsicComponent<DisclosureProps, HTMLDivElement>(function Disclosure(
  { children, styled, isOpen, summary, icon, isDisabled, onOpen, onChange, onClose, ...props },
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
    <Styled.Disclosure ref={ref} as={styled?.Disclosure} isOpen={internalIsOpen} isDisabled={isDisabled} {...props}>
      <Styled.Summary
        as={styled?.Summary}
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
          <Styled.Icon as={styled?.Icon} />
        )}
      </Styled.Summary>

      <Styled.Details
        as={styled?.Details}
        style={{
          height: detailsHeight,
        }}
      >
        <div ref={detailsRef}>{children}</div>
      </Styled.Details>
    </Styled.Disclosure>
  );
});

export default Disclosure;
