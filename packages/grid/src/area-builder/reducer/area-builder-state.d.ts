import type { Cell } from '../entity';

export interface AreaBuilderState {
  cells: Record<Cell['id'], Cell>;
  areas: Array<string | Cell['id']>;
  fractionsCount: number;
}
