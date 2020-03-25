import { RefObject } from 'react';

declare function useDropdown<E extends HTMLElement, D extends 'width' | 'height' = 'height'>(
  control: boolean,
  dimension: D
): { ref: RefObject<E> } & { [dimension in D]: string };

export default useDropdown;
