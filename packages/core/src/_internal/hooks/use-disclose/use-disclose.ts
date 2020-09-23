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
  // eslint-disable-next-line immutable/no-let
  let { current: hasChanged } = useRef(false);

  useEffect(() => {
    if (isOpen !== undefined) {
      hasChanged = true;

      setOpen(isOpen);
    }
  }, [isOpen]);

  useEffect(() => {
    if (hasChanged) {
      tryCall(internalIsOpen ? onOpen : onClose);

      tryCall(onChange, internalIsOpen);
    }
  }, [internalIsOpen]);

  return useMemo(() => [internalIsOpen, setOpen], [internalIsOpen, setOpen]);
};
