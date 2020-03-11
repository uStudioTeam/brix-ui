import { Alignment, Direction } from '../../../theme/theme';
import { Children } from '../types';

interface GridProps {
  children: Children;
  
  direction?: Direction;
  gap?: number;
  divideBy?: number;
  
  alignment?: Alignment;
  
  className?: string;
}

interface ColumnGridProps extends GridProps {
  direction?: 'column';
  divideBy?: never;
}

interface RowGridProps extends GridProps {
  direction?: 'row';
  divideBy?: number;
}

declare const Grid: {
  (props: RowGridProps | ColumnGridProps): JSX.Element;
};

export default Grid;
