import type { Dispatch } from 'react';

import type { AreaBuilderAction } from '../actions';

import { MountCellAction } from './area-builder.actions';

export class AreaBuilderDispatcher {
  public constructor(private dispatch: Dispatch<AreaBuilderAction>) {}

  public mountCell(payload: MountCellAction['payload']): void {
    this.dispatch(new MountCellAction(payload));
  }
}
