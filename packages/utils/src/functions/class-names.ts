import { safeFallback } from './safe-fallback';

export function classNames(...[predefinedClassName, classes]: [string, ...Array<string | undefined>]): string {
  return ([`brix-${predefinedClassName}`, classes].reduce((interpolation, className) => {
    return `${interpolation} ${safeFallback(className)}`;
  }, '') as string).trim();
}
