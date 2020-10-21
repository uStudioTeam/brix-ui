import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

/**
 * Equivalent of `componentWillUpdate`
 */
export default function useUpdateEffect(effect: EffectCallback, deps: DependencyList = []): void {
  const didUpdateRef = useRef(false);

  useEffect(() => {
    if (didUpdateRef.current) {
      effect();
    }

    didUpdateRef.current = true;
  }, deps);
}
