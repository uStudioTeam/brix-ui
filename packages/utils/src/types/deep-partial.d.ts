export type DeepPartial<T> = T extends object ? Partial<{ [P in keyof T]?: DeepPartial<T[P]> }> : T | undefined;
