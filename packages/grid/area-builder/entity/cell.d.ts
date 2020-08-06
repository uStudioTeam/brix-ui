import type { CellProps } from '../../cell';

export interface Cell extends Pick<CellProps, 'offset'> {
  id: string;
  size?: number;
}
