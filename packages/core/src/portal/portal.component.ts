import { FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal: FC = ({ children }) => {
  const [shouldMount, setMount] = useState(false);
  const containerRef = useRef<HTMLBodyElement>();

  useEffect(() => {
    if (document) {
      containerRef.current = document.querySelector('body') as HTMLBodyElement;
      setMount(true);
    }
  }, []);

  return shouldMount ? createPortal(children, containerRef.current as HTMLBodyElement) : null;
};

export default Portal;
