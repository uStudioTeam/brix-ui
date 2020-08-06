import { Cell } from '../entity';

export type GridAction = MountCellAction;

export class MountCellAction {
  public readonly type = 'mount_cell';

  public constructor(public readonly payload: Cell) {}
}
