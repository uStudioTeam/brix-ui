/**
 * Type-only Object.values
 */
export type Values<E> = E extends Record<string, unknown> ? E[keyof E] : E extends unknown[] ? E[number] : unknown;
