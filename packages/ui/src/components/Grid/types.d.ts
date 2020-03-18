import { ReactElement } from 'react';

type Children = ReactElement[] | ReactElement;
type Size = number;
type Offset =
  | {
  before: Size;
  after?: Size;
}
  | {
  before?: Size;
  after: Size;
}
  | {
  before: Size;
  after: Size;
};
