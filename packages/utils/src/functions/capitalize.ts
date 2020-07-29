export const capitalize = <S extends string>(string: S): string => `${string[0].toUpperCase()}${string.slice(1)}`;
