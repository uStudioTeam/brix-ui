import { useEffect, useMemo, useRef, useState } from 'react';

import { tryCall } from '@brix-ui/utils/functions';
import type { Disclosable } from '@brix-ui/types/component';

export const useDisclose = ({
  isOpen,
  onOpen,
  onChange,
  onClose,
}: Disclosable): [internalIsOpen: boolean, setOpen: (isOpen: boolean) => void] => {
  const [internalIsOpen, setOpen] = useState(isOpen ?? false);
  const hasChangedRef = useRef(false);

  useEffect(() => {
    if (isOpen !== undefined) {
      hasChangedRef.current = true;

      setOpen(isOpen);
    }
  }, [isOpen]);

  useEffect(() => {
    if (hasChangedRef.current) {
      tryCall(internalIsOpen ? onOpen : onClose);

      tryCall(onChange, internalIsOpen);
    }
  }, [internalIsOpen]);

  return useMemo(() => [internalIsOpen, setOpen], [internalIsOpen, setOpen]);
};
