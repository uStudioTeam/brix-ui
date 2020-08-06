import type { Dispatch } from 'react';

import { GridAction, MountCellAction } from './grid.actions';

export class GridDispatcher {
  public constructor(private dispatch: Dispatch<GridAction>) {}

  public mountCell(payload: MountCellAction['payload']): void {
    this.dispatch(new MountCellAction(payload));
  }
}
