export type StylableComponent<S extends string | string[] = undefined> = (S extends undefined
  ? {}
  : {
      customProperties?: Partial<Record<S extends string ? S : S[number], string | undefined>>;
    }) & {
  className?: string;
};
