import type { CellProps } from '../../cell';

export interface Cell {
  id: string;
  size?: number;
  offset?: Exclude<CellProps['offset'], number>;
}
