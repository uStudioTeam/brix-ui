import type { Values } from '@brix-ui/utils/types';
import { FontVariant, TypeVariant } from '@brix-ui/types/typography';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FontsProps
  extends Partial<
    Record<
      Values<typeof FontVariant>,
      {
        name?: string;
      } & Partial<
        Record<
          Values<typeof TypeVariant>,
          {
            src: string;
            weight: number | string;
          }
        >
      >
    >
  > {}
