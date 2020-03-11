import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  const ref = useRef();
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    if (document) {
      ref.current = document.querySelector('body');
      setMounted(true);
    }
  }, []);

  return isMounted ? createPortal(children, ref.current) : null;
};

export default Portal;
