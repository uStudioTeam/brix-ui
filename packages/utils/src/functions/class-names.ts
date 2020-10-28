import { safeFallback } from './safe-fallback';

/**
 * Prefixes the first parameter with 'brix-' and includes others, if they are not undefined
 */
export function classNames(...[predefinedClassName, classes]: [string, ...Array<string | undefined>]): string {
  return ([`brix-${predefinedClassName}`, classes].reduce((interpolation, className) => {
    return `${interpolation} ${safeFallback(className)}`;
  }, '') as string).trim();
}
