export const orUndefined = <V>(value: V | undefined): true | undefined => Boolean(value) || undefined;
