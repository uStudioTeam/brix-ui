import { useCallback, useMemo } from 'react';

import { tryCall } from '@brix-ui/utils/functions';
import type { Disclosable } from '@brix-ui/types/component';

import useUpdateEffect from './use-update-effect';
import useUpdatedState from './use-updated-state';

export default function useDisclose({
  isOpen,
  onOpen,
  onChange,
  onClose,
}: Disclosable): [internalIsOpen: boolean, toggle: (isOpen?: boolean) => void] {
  const [internalIsOpen, setInternalOpen] = useUpdatedState(isOpen ?? false);

  const toggle = useCallback(
    (openControl?: boolean) => {
      setInternalOpen(openControl === undefined ? !internalIsOpen : openControl);
    },
    [internalIsOpen, setInternalOpen]
  );

  useUpdateEffect(() => {
    if ((isOpen !== undefined && isOpen === internalIsOpen) || isOpen === undefined) {
      tryCall(internalIsOpen ? onOpen : onClose);

      tryCall(onChange, internalIsOpen);
    }
  }, [internalIsOpen, isOpen, onOpen, onChange, onClose]);

  return useMemo(() => [internalIsOpen, toggle], [internalIsOpen, toggle]);
}
