/**
 * Intersects two types
 */
export type With<T, W> = T extends undefined ? W : W & T;
