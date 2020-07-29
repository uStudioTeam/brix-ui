import { Values } from '@ustudio-ui/utils/types';

export const objectValues = <O>(object: O): Values<O>[] => Object.values(object);
