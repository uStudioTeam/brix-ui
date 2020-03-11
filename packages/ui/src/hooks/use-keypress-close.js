import { useEffect } from 'react';

const useKeyPressClose = (closeCallback, key = 27) => {
  function handleClose({ keyCode }) {
    if (keyCode === key) {
      closeCallback(false);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleClose, false);

    return () => {
      document.removeEventListener('keydown', handleClose, false);
    };
  }, []);
};

export default useKeyPressClose;
