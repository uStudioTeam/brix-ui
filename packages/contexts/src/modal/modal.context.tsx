import React, { createContext, FC, useContext } from 'react';

import useDisclose from '@brix-ui/hooks/use-disclose';
import useUnmountOnExit from '@brix-ui/hooks/use-unmount-on-exit';
import { filterObject } from '@brix-ui/utils/functions';
import { disclosable, unmountable } from '@brix-ui/prop-types/common';

import type { ModalProps } from './modal.props';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ModalValue extends Pick<ModalProps, 'unmountOnExit'> {
  shouldBeOpen: boolean;
  shouldMount: boolean;
}

const ModalContext = createContext<ModalValue | undefined>(undefined);

const Modal: FC<ModalProps> = ({ children, isOpen, unmountOnExit, onOpen, onChange, onClose }) => {
  const [internalIsOpen] = useDisclose({
    isOpen,
    onOpen,
    onChange,
    onClose,
  });

  const [shouldBeOpen, shouldMount] = useUnmountOnExit(internalIsOpen, unmountOnExit);

  return shouldMount ? (
    <ModalContext.Provider value={{ unmountOnExit, shouldBeOpen, shouldMount }}>{children}</ModalContext.Provider>
  ) : null;
};

Modal.propTypes = {
  ...disclosable,
  ...unmountable,
};

export const useModal = (props = {} as Partial<ModalValue>): ModalValue => {
  const context = useContext(ModalContext) || {};

  return {
    ...filterObject(props, (key) => props[key] !== undefined),
    ...context,
  } as ModalValue;
};

export default Modal;
