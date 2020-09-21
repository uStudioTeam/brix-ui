import { Values } from '@brix-ui/utils/types';

export const objectValues = <O>(object: O): Values<O>[] => Object.values(object);
