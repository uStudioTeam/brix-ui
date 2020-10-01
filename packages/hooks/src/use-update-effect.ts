import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export default function useUpdateEffect(effect: EffectCallback, deps: DependencyList = []): void {
  const didUpdateRef = useRef(false);

  useEffect(() => {
    if (didUpdateRef.current) {
      effect();
    }

    didUpdateRef.current = true;
  }, deps);
}
