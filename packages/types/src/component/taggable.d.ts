import type { ComponentType } from 'react';

export interface Taggable<T> {
  as?: T | ComponentType<any>;
}
