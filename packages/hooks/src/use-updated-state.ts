import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export default function useUpdatedState<S>(updatedState: S): [state: S, setState: Dispatch<SetStateAction<S>>] {
  const [state, setState] = useState(updatedState);

  useEffect(() => {
    setState(updatedState);
  }, [updatedState, setState]);

  return [state, setState];
}
