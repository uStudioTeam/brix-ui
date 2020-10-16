type Keys<O> = (keyof O)[];

export function objectKeys<O>(object: O): Keys<O> {
  return Object.keys(object) as Keys<O>;
}
