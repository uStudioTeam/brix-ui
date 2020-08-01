import type { Dispatch } from 'react';

import { GridAction, MountCellAction } from './area-builder.actions';

export class AreaBuilderDispatcher {
  public constructor(private dispatch: Dispatch<GridAction>) {}

  public mountCell(payload: MountCellAction['payload']): void {
    this.dispatch(new MountCellAction(payload));
  }
}
