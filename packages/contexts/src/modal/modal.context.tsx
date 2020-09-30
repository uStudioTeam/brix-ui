import React, { createContext, FC, useContext } from 'react';

import useDisclose from '@brix-ui/hooks/use-disclose';
import useUnmountOnExit from '@brix-ui/hooks/use-unmount-on-exit';
import { applyPolymorphicFunctionProp } from '@brix-ui/utils/functions';
import { disclosable, unmountable } from '@brix-ui/prop-types/common';

import type { ModalProps, ModalValue } from './modal.props';

const ModalContext = createContext<ModalValue | undefined>(undefined);

export const useModal = ({
  isOpen,
  onOpen,
  onChange,
  onClose,
  unmountOnExit,
}: Omit<ModalProps, 'children'>): ModalValue => {
  const [internalIsOpen, toggle] = useDisclose({
    isOpen,
    onOpen,
    onChange,
    onClose,
  });

  const [shouldBeOpen, shouldMount] = useUnmountOnExit(internalIsOpen, unmountOnExit);

  return useContext(ModalContext) || { shouldBeOpen, shouldMount, toggle };
};

const Modal: FC<ModalProps> = ({ children, isOpen, unmountOnExit, onOpen, onChange, onClose }) => {
  const value = useModal({ isOpen, onOpen, onChange, onClose, unmountOnExit });

  return value.shouldMount ? (
    <ModalContext.Provider value={value}>{applyPolymorphicFunctionProp(children, value)}</ModalContext.Provider>
  ) : null;
};

Modal.propTypes = {
  ...disclosable,
  ...unmountable,
};

export default Modal;
