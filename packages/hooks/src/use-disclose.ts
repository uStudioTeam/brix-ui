import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { tryCall } from '@brix-ui/utils/functions';
import type { Disclosable } from '@brix-ui/types/component';

export default function useDisclose({
  isOpen,
  onOpen,
  onChange,
  onClose,
}: Disclosable): [internalIsOpen: boolean, toggle: (isOpen?: boolean) => void] {
  const [internalIsOpen, setInternalOpen] = useState(isOpen ?? false);
  const hasChangedRef = useRef(false);

  const toggle = useCallback(
    (openControl?: boolean) => {
      hasChangedRef.current = true;

      setInternalOpen(openControl === undefined ? !internalIsOpen : openControl);
    },
    [internalIsOpen, setInternalOpen]
  );

  useEffect(() => {
    if (isOpen !== undefined) {
      toggle(isOpen);
    }
  }, [isOpen, toggle]);

  useEffect(() => {
    if (hasChangedRef.current) {
      tryCall(internalIsOpen ? onOpen : onClose);

      tryCall(onChange, internalIsOpen);
    }
  }, [internalIsOpen, onOpen, onChange, onClose]);

  return useMemo(() => [internalIsOpen, toggle], [internalIsOpen, toggle]);
}
