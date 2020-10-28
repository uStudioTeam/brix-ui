import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import type { PortalProps } from './portal.props';

const Portal: FC<PortalProps> = ({ children, container }) => {
  const [shouldMount, setMount] = useState(false);
  const containerRef = useRef<HTMLElement>(null) as MutableRefObject<HTMLElement | null>;

  useEffect(() => {
    if (document) {
      containerRef.current = (container || document.querySelector('body')) as HTMLElement;
      setMount(true);
    }
  }, []);

  return shouldMount ? createPortal(children, containerRef.current as HTMLElement) : null;
};

export default Portal;
