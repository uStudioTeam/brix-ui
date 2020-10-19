export function transition(duration: string, ...properties: string[]): string {
  return `${properties
    .reduce((style, property) => `${style}, ${property} ${duration}`, ``)
    .trim()
    .slice(1)}`;
}
