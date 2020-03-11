import { RefObject } from 'react';

export declare function useDropdown<E extends HTMLElement, D extends 'width' | 'height' = 'height'>(
  control: boolean,
  dimension: D
): { ref: RefObject<E> } & { [dimension in D]: string };

export declare function useKeyPressClose(closeCallback: (control: boolean) => void, key?: number): void;
