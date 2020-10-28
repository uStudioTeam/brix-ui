import { Align as _Align } from '../css';

type Align = typeof _Align;

export type Alignable = Partial<Record<'horizontalAlign' | 'verticalAlign' | 'align', Align[keyof Align]>>;
