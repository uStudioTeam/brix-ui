import type { Cell } from '../entity';

export interface GridState {
  cells: Record<Cell['id'], Cell>;
  areas: Array<(string | Cell['id'])>;
  fractionsCount: number;
}
