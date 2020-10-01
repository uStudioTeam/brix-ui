import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export default function useUpdatedState<S>(updatedState: S): [state: S, setState: Dispatch<SetStateAction<S>>] {
  const [state, setState] = useState(updatedState);

  useEffect(() => {
    setState((prevState) => {
      if (prevState !== updatedState) {
        return updatedState;
      }

      return prevState;
    });
  }, [updatedState, setState]);

  return [state, setState];
}
