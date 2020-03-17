const background = background => `background: ${background || 'var(--g-primary)'}`;

const color = color => `color: ${color || 'var(--c-lightest)'}`;

export const inject = { background, color };
