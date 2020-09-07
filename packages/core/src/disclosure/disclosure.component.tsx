import React, { useEffect, useState } from 'react';
import useAutoTransition from 'honks/use-auto-transition';

import { applyPolymorphicFunctionProp, intrinsicComponent, tryCall } from '@ustudio-ui/utils/functions';

import type { DisclosureProps } from './disclosure.props';
import Styled from './disclosure.styles';

const Disclosure = intrinsicComponent<DisclosureProps, HTMLDivElement>(function Disclosure(
  { children, isOpen, summary, icon, isDisabled, onOpen, onChange, onClose },
  ref
) {
  const [internalIsOpen, setOpen] = useState(isOpen ?? false);

  // @ToDo: this should become smth like `useControlled`
  useEffect(() => {
    if (isOpen !== undefined) {
      setOpen(!internalIsOpen);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!internalIsOpen) {
      tryCall(onOpen);
    } else {
      tryCall(onClose);
    }

    tryCall(onChange, !internalIsOpen);
  }, [internalIsOpen]);

  const [detailsRef, detailsHeight] = useAutoTransition<HTMLDivElement>(
    (element) => {
      return element.getBoundingClientRect().height;
    },
    [internalIsOpen, 200]
  );

  return (
    <Styled.Disclosure ref={ref} isOpen={internalIsOpen} isDisabled={isDisabled}>
      <Styled.Summary
        type="button"
        isOpen={internalIsOpen}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        onClick={() => {
          setOpen(!internalIsOpen);
        }}
      >
        {summary}

        {applyPolymorphicFunctionProp(icon, { isOpen: !internalIsOpen, isDisabled }) || <Styled.Icon />}
      </Styled.Summary>

      <Styled.Details $height={detailsHeight}>
        <div ref={detailsRef}>{children}</div>
      </Styled.Details>
    </Styled.Disclosure>
  );
});

export default Disclosure;