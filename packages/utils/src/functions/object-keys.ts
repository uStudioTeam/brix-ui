type Keys<O> = (keyof O)[];

export const objectKeys = <O>(object: O): Keys<O> => Object.keys(object) as Keys<O>;
