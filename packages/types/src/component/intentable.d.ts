import { Intent as _Intent } from './intent';

type Intent = typeof _Intent;

export interface Intentable {
  intent?: Intent[keyof Intent];
}
