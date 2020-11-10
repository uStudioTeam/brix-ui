/**
 * @deprecated
 */
interface Gapable extends Partial<Record<'verticalGap' | 'horizontalGap', string>> {
  gap?:
    | string
    | {
        vertical?: string;
        horizontal?: string;
      };
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Gapable extends Partial<Record<'gap' | 'verticalGap' | 'horizontalGap', string>> {}
